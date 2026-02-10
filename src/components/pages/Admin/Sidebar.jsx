import { LayoutDashboard, BedDouble, CalendarDays, Users, CreditCard, LogOut } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    // Implement logout logic here if needed
    navigate('/admin/login')
  }

  return (
    <div className="bg-dark-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-serif font-bold tracking-wider">PATIL ADMIN</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link 
          to="/admin/dashboard" 
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive('/admin/dashboard') ? 'bg-gold-500 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link 
          to="/admin/rooms" 
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive('/admin/rooms') ? 'bg-gold-500 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <BedDouble size={20} />
          <span>Manage Rooms</span>
        </Link>
        <Link 
          to="/admin/bookings" 
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive('/admin/bookings') ? 'bg-gold-500 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <CalendarDays size={20} />
          <span>Bookings</span>
        </Link>
        <Link 
          to="/admin/users" 
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive('/admin/users') ? 'bg-gold-500 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <Users size={20} />
          <span>Users</span>
        </Link>
        <Link 
          to="/admin/payments" 
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive('/admin/payments') ? 'bg-gold-500 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <CreditCard size={20} />
          <span>Payments</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white w-full transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
