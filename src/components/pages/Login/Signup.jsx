import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

export default function Signup() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate signup and auto-login
    login({ name: formData.name, email: formData.email })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-lg shadow-2xl w-full max-w-md z-10 border border-white/20 my-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-white mb-2 tracking-wider">JOIN PATIL</h2>
          <p className="text-gold-400 uppercase tracking-widest text-xs">Create Your Account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-xs uppercase tracking-wider mb-1" htmlFor="name">
              Full Name
            </label>
            <input 
              type="text" 
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-white text-xs uppercase tracking-wider mb-1" htmlFor="email">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-white text-xs uppercase tracking-wider mb-1" htmlFor="password">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-white text-xs uppercase tracking-wider mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input 
              type="password" 
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Confirm your password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gold-600 text-white uppercase tracking-widest py-3 rounded hover:bg-gold-500 transition shadow-lg font-medium mt-4"
          >
            Sign Up
          </motion.button>
        </form>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Already have an account? <button onClick={() => navigate('/login')} className="text-white hover:text-gold-400 transition ml-1 uppercase tracking-wide">Login</button></p>
        </div>
      </motion.div>
    </div>
  )
}
