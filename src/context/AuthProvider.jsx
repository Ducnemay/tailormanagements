import { createContext, useState, useEffect, useCallback } from "react";
import { jwtDecode } from 'jwt-decode';
import api from "../Components/utils/requestAPI";

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    logout: () => {},
    refreshToken: () => {}
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
      
        const savedToken = localStorage.getItem("token");
        const savedRefreshToken = localStorage.getItem("refreshToken");
        const savedUser = localStorage.getItem("user");

        if (savedToken && savedUser) {
            try {
                // Check if token is expired
                const decoded = jwtDecode(savedToken);
                const currentTime = Date.now() / 1000;
                
                if (decoded.exp && decoded.exp < currentTime) {
                    // Token expired, try to refresh or logout
                    return { user: null };
                }

                return {
                    token: savedToken,
                    refreshToken: savedRefreshToken,
                    user: JSON.parse(savedUser)
                };
            } catch (error) {
                console.error("Error loading auth:", error);
                return { user: null };
            }
        }

        return { user: null };
    });

    // Refresh access token using refresh token
    const refreshAccessToken = useCallback(async () => {
        const refreshToken = localStorage.getItem("refreshToken");
        
        if (!refreshToken) {
            console.error("No refresh token available");
            logout();
            return null;
        }

        try {
            // Call refresh token API
            const response = await api.post("/Auth/refresh-token", {
                refreshToken: refreshToken
            });

            const { accessToken, refreshToken: newRefreshToken } = response.data;

            // Update tokens in localStorage
            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", newRefreshToken);

           
            const decoded = jwtDecode(accessToken);
            const user = {
                sub: decoded.sub,
                email: decoded.email,
                roleId: decoded.roleId,
                role: decoded.role,
                userName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
            };

            // Update auth state
            setAuth({
                token: accessToken,
                refreshToken: newRefreshToken,
                user: user
            });

            return accessToken;
        } catch (error) {
            console.error("Refresh token failed:", error);
            logout();
            return null;
        }
    }, []);

    // Logout function
    const logout = useCallback(() => {
        // Clear all auth data
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("authExpiry");
        
        setAuth({ user: null });
        
        // Redirect to login
        window.location.href = '/login';
    }, []);

  
    useEffect(() => {
        if (!auth?.token) return;

        const checkTokenExpiration = () => {
            try {
                const decoded = jwtDecode(auth.token);
                const currentTime = Date.now() / 1000;
                const timeUntilExpiry = decoded.exp - currentTime;

               
                if (timeUntilExpiry < 300) { 
                    console.log("Token expiring soon, refreshing...");
                    refreshAccessToken();
                }
            } catch (error) {
                console.error("Error checking token expiration:", error);
            }
        };

      
        checkTokenExpiration();

       
        const interval = setInterval(checkTokenExpiration, 60000);

        return () => clearInterval(interval);
    }, [auth?.token, refreshAccessToken]);

    
    useEffect(() => {
        if (auth?.user && auth?.token) {
            localStorage.setItem("token", auth.token);
            if (auth.refreshToken) {
                localStorage.setItem("refreshToken", auth.refreshToken);
            }
            localStorage.setItem("user", JSON.stringify(auth.user));
        }
    }, [auth]);

  
    useEffect(() => {
        let isRefreshing = false;
        let failedQueue = [];

        const processQueue = (error, token = null) => {
            failedQueue.forEach(prom => {
                if (error) {
                    prom.reject(error);
                } else {
                    prom.resolve(token);
                }
            });
            failedQueue = [];
        };

        // Request interceptor - add token to all requests
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor - handle 401 and refresh token
        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                // If error is not 401 or already retried, reject
                if (error.response?.status !== 401 || originalRequest._retry) {
                    return Promise.reject(error);
                }

                // If already refreshing, queue the request
                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    })
                        .then(token => {
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            return api(originalRequest);
                        })
                        .catch(err => Promise.reject(err));
                }

                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const newToken = await refreshAccessToken();
                    
                    if (newToken) {
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        processQueue(null, newToken);
                        return api(originalRequest);
                    } else {
                        processQueue(error, null);
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    processQueue(refreshError, null);
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }
        );

        // Cleanup interceptors on unmount
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [refreshAccessToken]);

    const value = {
        auth,
        setAuth,
        logout,
        refreshToken: refreshAccessToken
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;