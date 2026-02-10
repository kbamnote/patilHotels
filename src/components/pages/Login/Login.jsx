import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login
    login({ email })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-12 rounded-lg shadow-2xl w-full max-w-md z-10 border border-white/20"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-white mb-2 tracking-wider">PATIL HOTELS</h2>
          <p className="text-gold-400 uppercase tracking-widest text-sm">Welcome Back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-sm uppercase tracking-wider mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm uppercase tracking-wider mb-2" htmlFor="password">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/30 border border-white/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-300">
              <input type="checkbox" className="mr-2 accent-gold-500" />
              Remember me
            </label>
            <button type="button" onClick={() => navigate('/forgot-password')} className="text-gold-400 hover:text-gold-300 transition">
              Forgot Password?
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gold-600 text-white uppercase tracking-widest py-3 rounded hover:bg-gold-500 transition shadow-lg font-medium"
          >
            Sign In
          </motion.button>
        </form>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Don't have an account? <button onClick={() => navigate('/signup')} className="text-white hover:text-gold-400 transition ml-1 uppercase tracking-wide">Sign Up</button></p>
        </div>
        
        <div className="mt-6 text-center">
            <button onClick={() => navigate('/')} className="text-gray-500 hover:text-white transition text-xs uppercase tracking-widest">
                Back to Home
            </button>
        </div>
      </motion.div>
    </div>
  )
}
