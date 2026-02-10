import { motion } from 'framer-motion'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  // Mock Data
  const currentBooking = {
    id: 'BK-789012',
    room: 'Presidential Suite',
    checkIn: 'Oct 24, 2026',
    checkOut: 'Oct 28, 2026',
    guests: 2,
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }

  const pastBookings = [
    {
      id: 'BK-123456',
      room: 'Ocean View Deluxe',
      dates: 'Aug 12 - Aug 15, 2025',
      price: '$1,200',
      status: 'Completed'
    },
    {
      id: 'BK-654321',
      room: 'Garden Suite',
      dates: 'Jan 05 - Jan 08, 2025',
      price: '$950',
      status: 'Completed'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
             <h1 className="text-4xl font-serif text-dark-900 mb-2">Welcome, {user.name || 'Guest'}</h1>
             <p className="text-gray-500">Manage your stays and experiences.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="text-sm font-medium text-gold-600 uppercase tracking-widest">Member since 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area - 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Current Stay Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="relative h-64">
                <img src={currentBooking.image} alt={currentBooking.room} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold">
                  {currentBooking.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                   <h2 className="text-2xl text-white font-serif">{currentBooking.room}</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                   <div>
                      <p className="text-gray-400 uppercase text-xs tracking-wider mb-1">Check In</p>
                      <p className="text-dark-900 font-medium text-lg">{currentBooking.checkIn}</p>
                   </div>
                   <div>
                      <p className="text-gray-400 uppercase text-xs tracking-wider mb-1">Check Out</p>
                      <p className="text-dark-900 font-medium text-lg">{currentBooking.checkOut}</p>
                   </div>
                   <div>
                      <p className="text-gray-400 uppercase text-xs tracking-wider mb-1">Guests</p>
                      <p className="text-dark-900 font-medium text-lg">{currentBooking.guests}</p>
                   </div>
                   <div>
                      <p className="text-gray-400 uppercase text-xs tracking-wider mb-1">Reservation ID</p>
                      <p className="text-dark-900 font-medium text-lg">#{currentBooking.id.split('-')[1]}</p>
                   </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="bg-dark-900 text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-gold-600 transition duration-300">
                    View Details
                  </button>
                  <button className="border border-dark-900 text-dark-900 px-6 py-3 uppercase text-xs tracking-widest hover:bg-gray-50 transition duration-300">
                    Modify Booking
                  </button>
                </div>
              </div>
            </motion.section>

             {/* Recent History */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
               <h3 className="text-2xl font-serif text-dark-900 mb-6">Past Stays</h3>
               <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center transition hover:shadow-md">
                       <div className="mb-4 md:mb-0">
                          <h4 className="font-serif text-lg text-dark-900">{booking.room}</h4>
                          <p className="text-sm text-gray-500 mt-1">{booking.dates}</p>
                       </div>
                       <div className="flex items-center gap-6">
                          <span className="text-gold-600 font-medium">{booking.price}</span>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs uppercase tracking-wider rounded-full">{booking.status}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.section>

          </div>

          {/* Sidebar - Profile & Quick Actions */}
          <div className="space-y-8">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-500"
             >
                <div className="text-center mb-6">
                   <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-400 font-serif">
                      {user.name ? user.name.charAt(0) : 'U'}
                   </div>
                   <h3 className="text-xl font-serif text-dark-900">{user.name}</h3>
                   <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                
                <div className="space-y-3">
                   <button className="w-full text-left px-4 py-3 rounded hover:bg-gray-50 transition text-sm text-gray-700 flex justify-between group">
                      Edit Profile <span className="group-hover:translate-x-1 transition">→</span>
                   </button>
                   <button className="w-full text-left px-4 py-3 rounded hover:bg-gray-50 transition text-sm text-gray-700 flex justify-between group">
                      Payment Methods <span className="group-hover:translate-x-1 transition">→</span>
                   </button>
                   <button className="w-full text-left px-4 py-3 rounded hover:bg-gray-50 transition text-sm text-gray-700 flex justify-between group">
                      Preferences <span className="group-hover:translate-x-1 transition">→</span>
                   </button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                   <button 
                    onClick={logout}
                    className="w-full text-center text-red-500 hover:text-red-600 text-sm uppercase tracking-widest font-medium transition"
                   >
                     Sign Out
                   </button>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="bg-dark-900 p-8 rounded-xl text-white relative overflow-hidden"
             >
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl mb-2">PATIL Club</h3>
                  <p className="text-gold-400 text-sm uppercase tracking-widest mb-6">Gold Member</p>
                  
                  <div className="mb-2 flex justify-between text-xs uppercase tracking-wide opacity-70">
                     <span>Points Balance</span>
                     <span>12,450 pts</span>
                  </div>
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mb-6">
                     <div className="bg-gold-500 h-full w-3/4"></div>
                  </div>
                  
                  <button className="w-full border border-gold-500 text-gold-500 py-3 uppercase text-xs tracking-widest hover:bg-gold-500 hover:text-white transition">
                     View Benefits
                  </button>
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl"></div>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
