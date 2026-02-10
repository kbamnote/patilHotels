import { motion } from 'framer-motion'
import { Users, BedDouble, CalendarCheck, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: "Total Bookings", value: "1,248", change: "+12%", icon: <CalendarCheck size={24} />, color: "bg-blue-500" },
    { label: "Total Revenue", value: "$84,300", change: "+8%", icon: <TrendingUp size={24} />, color: "bg-green-500" },
    { label: "Active Guests", value: "42", change: "+5%", icon: <Users size={24} />, color: "bg-purple-500" },
    { label: "Room Occupancy", value: "78%", change: "-2%", icon: <BedDouble size={24} />, color: "bg-orange-500" },
  ]

  return (
    <div className="p-8 font-sans w-full">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-dark-900">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold">
               A
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className={`p-3 rounded-lg ${stat.color} text-white shadow-md`}>
                   {stat.icon}
                 </div>
                 <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                   {stat.change}
                 </span>
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-xs uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity / Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-dark-900 mb-4">Revenue Analytics</h3>
              <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                 [Chart Placeholder]
              </div>
           </div>
           
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-dark-900 mb-4">Recent Bookings</h3>
              <div className="space-y-4">
                 {[1, 2, 3, 4].map((item) => (
                   <div key={item} className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium text-dark-900 text-sm">John Doe</p>
                        <p className="text-xs text-gray-400">Presidential Suite</p>
                      </div>
                      <span className="text-xs font-bold text-gold-600">$1,200</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

    </div>
  )
}
