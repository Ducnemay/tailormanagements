import {
  User,
  Calendar,
  Package,
  BarChart3,
  LayoutDashboard
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { id: 'dashboard', label: 'DASHBOARD', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'clients', label: 'CLIENTS', icon: User, path: '/clients' },
  { id: 'appointments', label: 'APPOINTMENTS', icon: Calendar, path: '/appointments' },
  // { id: 'inventory', label: 'INVENTORY', icon: Package, path: '/inventory' },
  { id: 'reports', label: 'REPORTS', icon: BarChart3, path: '/reports' },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1a2332] min-h-screen text-white flex flex-col">

      {/* Logo */}
     <div className="p-8 border-b border-gray-700">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center ring-1 ring-gray-700">
      <img
        src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769161593/Image/Dinosaur/1d0b27fbfdb173ef2aa0.jpg"
        alt="Duan Tailor Logo"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div className="leading-none">
      <h1 className="text-xl font-serif tracking-wider">Duan</h1>
      <h1 className="text-xl font-serif tracking-wider">Tailor</h1>
    </div>
  </div>

  <p className="text-xs text-gray-400 tracking-widest">
    QUẢN TRỊ CAO CẤP
  </p>
</div>


      {/* Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map(({ id, label, icon: Icon, path }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => `
              w-full px-8 py-4 flex items-center gap-3
              transition-all duration-200 ease-in-out
              border-l-4
              ${isActive
                ? 'bg-[#2a3544] border-amber-600 text-white'
                : 'border-transparent text-gray-300 hover:bg-[#242d3c] hover:text-white'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <Icon size={20} className={isActive ? 'text-amber-600' : ''} />
                <span className="text-sm tracking-wider font-medium">
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
            <span className="text-sm font-semibold">ML</span>
          </div>
          <div>
            <p className="text-sm font-medium">M. LEFEBVRE</p>
            <p className="text-xs text-gray-400 tracking-wide">DIRECTEUR</p>
          </div>
        </div>
      </div>
    </div>
  )
}
