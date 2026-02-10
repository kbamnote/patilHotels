import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuth()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  // Prevent scrolling when mobile menu is open
  if (typeof document !== 'undefined') {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false)
    navigate(path)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white text-dark-900 shadow-md py-3' : 'bg-transparent text-white py-6'}`}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="text-2xl font-serif font-bold tracking-wider cursor-pointer z-50 relative"
        >
          PATIL HOTELS
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <motion.button 
            onClick={() => navigate('/about')}
            className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
          >
              About
          </motion.button>
          <motion.button 
            onClick={() => navigate('/rooms')}
            className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
          >
              Rooms
          </motion.button>
          <motion.button
            onClick={() => navigate('/facilities')}
            className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
          >
              Facilities
          </motion.button>
          <motion.button 
            onClick={() => navigate('/offers')}
            className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
          >
              Offers
          </motion.button>
          <motion.button 
            onClick={() => navigate('/contact')}
            className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
          >
              Contact
          </motion.button>
        </div>

        {/* Desktop Auth & Book */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-4">
               <div 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center space-x-2 cursor-pointer group"
               >
                 <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-serif">
                    {user.name ? user.name.charAt(0) : 'U'}
                 </div>
                 <span className={`text-sm uppercase tracking-widest font-medium group-hover:text-gold-500 transition ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
                    {user.name || 'Account'}
                 </span>
               </div>
               <motion.button 
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className={`uppercase text-sm tracking-widest transition font-medium ${isScrolled ? 'text-dark-900 hover:text-gold-600' : 'text-white hover:text-gold-400'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <motion.button 
              onClick={() => navigate('/login')}
              className={`uppercase text-sm tracking-widest transition font-medium ${isScrolled ? 'text-dark-900 hover:text-gold-600' : 'text-white hover:text-gold-400'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          )}
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(197, 164, 126, 1)", borderColor: "rgba(197, 164, 126, 1)", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className={`border px-6 py-2 uppercase text-sm tracking-widest transition ${isScrolled ? 'border-dark-900 text-dark-900 hover:border-gold-500' : 'border-white text-white'}`}
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden z-50">
          <button 
            onClick={toggleMobileMenu} 
            className={`focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-dark-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 text-xl uppercase tracking-widest font-serif text-dark-900">
               <button onClick={() => handleNavClick('/about')} className="hover:text-gold-600 transition">About</button>
               <button onClick={() => handleNavClick('/rooms')} className="hover:text-gold-600 transition">Rooms</button>
               <button onClick={() => handleNavClick('/facilities')} className="hover:text-gold-600 transition">Facilities</button>
               <button onClick={() => handleNavClick('/offers')} className="hover:text-gold-600 transition">Offers</button>
               <button onClick={() => handleNavClick('/contact')} className="hover:text-gold-600 transition">Contact</button>
               
               <div className="w-12 h-[1px] bg-gold-200 my-4"></div>

               {user ? (
                  <div className="flex flex-col items-center space-y-4">
                    <button onClick={() => handleNavClick('/dashboard')} className="hover:text-gold-600 transition">Dashboard</button>
                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); navigate('/'); }} className="hover:text-gold-600 transition">Logout</button>
                  </div>
               ) : (
                  <button onClick={() => handleNavClick('/login')} className="hover:text-gold-600 transition">Login</button>
               )}

               <button className="bg-dark-900 text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-gold-600 transition mt-4">
                 Book Now
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
