import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Password reset requested for:', email)
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-12 rounded-lg shadow-2xl w-full max-w-md z-10 border border-white/20"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-white mb-2 tracking-wider">PASSWORD RESET</h2>
          <p className="text-gold-400 uppercase tracking-widest text-xs">Recover Your Account</p>
        </div>

        <p className="text-gray-300 text-center mb-8 text-sm leading-relaxed">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>

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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gold-600 text-white uppercase tracking-widest py-3 rounded hover:bg-gold-500 transition shadow-lg font-medium"
          >
            Send Reset Link
          </motion.button>
        </form>

        <div className="mt-8 text-center">
            <button onClick={() => navigate('/login')} className="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest flex items-center justify-center w-full">
                <span className="mr-2">←</span> Back to Login
            </button>
        </div>
      </motion.div>
    </div>
  )
}
