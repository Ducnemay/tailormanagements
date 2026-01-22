import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from '@/features/dashboard/DashboardPage'
import ClientsPage from '@/features/clients/ClientsPage'
import AppointmentsPage from '@/features/appointments/AppointmentsPage'
import InventoryPage from '@/features/inventory/InventoryPage'
import ReportsPage from '@/features/reports/ReportsPage'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
// import LoginPage from '@/pages/LoginPage'


export default function AppRoutes() {
    return (
        <Routes>

           
       <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />


            <Route
                path="/dashboard"
                element={

                    <DashboardPage />

                }
            />
            <Route
                path="/clients"
                element={

                    <ClientsPage />

                }
            />
            <Route
                path="/appointments"
                element={

                    <AppointmentsPage />

                }
            />
            <Route
                path="/inventory"
                element={

                    <InventoryPage />

                }
            />
            <Route
                path="/reports"
                element={

                    <ReportsPage />

                }
            />



            {/* Default */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />

        </Routes>
    )
}
