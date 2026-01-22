import axios from 'axios';

const api = axios.create({
    // sever
   // baseURL: 'https://bcsswp.azurewebsites.net',
    // local
    // baseURL: 'https://localhost:7199',
     baseURL: 'https://localhost:7211/',
    // baseURL: 'https://colordanhub-c4e2c2b9exaudqfu.eastasia-01.azurewebsites.net',
    // baseURL: 'https://becolordanhub.azurewebsites.net',
});

// Request interceptor (always attach token if present)
api.interceptors.request.use(
    function (config) {
        const storedToken = localStorage.getItem('token') || localStorage.getItem('Authen');
        if (storedToken) {
            config.headers.Authorization = `Bearer ${storedToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    function (response) {
        if (response.data && response.data.data) {
            response.data = response.data.data;
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default api;