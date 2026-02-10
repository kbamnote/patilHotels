import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock login - in a real app, verify admin credentials
    if (email === 'admin@PATILhotels.com' && password === 'admin') {
       navigate('/admin/dashboard')
    } else {
       // Just go to dashboard for demo purposes
       navigate('/admin/dashboard') 
    }
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-md z-10 border border-white/20"
        >
          <div className="text-center mb-8">
             <h2 className="text-3xl font-serif text-white mb-2">Admin Portal</h2>
             <p className="text-gray-400 text-sm">Sign in to manage PATIL Hotels</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-xs uppercase tracking-wider mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition"
                placeholder="admin@PATILhotels.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-xs uppercase tracking-wider mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition"
                placeholder="admin"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gold-600 text-white py-3 rounded font-medium hover:bg-gold-500 transition shadow-lg uppercase tracking-widest text-sm"
            >
              Access Dashboard
            </button>
          </form>
        </motion.div>
    </div>
  )
}
