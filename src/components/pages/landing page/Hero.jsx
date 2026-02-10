import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import image from '../../../assets/hr1-3.webp'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="relative h-screen w-full bg-slate-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Image - Scale Effect */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <motion.div 
        style={{ y, backgroundImage: `url(${image})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center"
      ></motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl font-light tracking-widest mb-4"
        >
          WELCOME TO
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8"
        >
          PATIL HOTELS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-lg font-light max-w-2xl mx-auto mb-12"
        >
          Experience world-class hospitality where luxury, comfort, and elegance come together for an unforgettable hotel stay.
        </motion.p>
        
        {/* Floating Card */}
        {/* <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center space-x-4 glass-panel px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-900">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
          <div className="text-left">
             <p className="text-xs uppercase tracking-wider text-gray-300">Discover</p>
             <p className="text-sm font-semibold">Take a closer look</p>
          </div>
        </motion.div> */}
      </div>

      {/* Booking Form Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        className="absolute -bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-30"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full flex flex-col md:flex-row items-center gap-2 md:gap-0 shadow-2xl">
          <div className="flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto">
             <div className="mr-3">
               <label className="block text-xs uppercase text-gray-300 tracking-wider">Check-in</label>
               <input type="date" className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm" />
             </div>
          </div>
           <div className="flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto">
             <div className="mr-3">
               <label className="block text-xs uppercase text-gray-300 tracking-wider">Check-out</label>
               <input type="date" className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm" />
             </div>
          </div>
           <div className="flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto">
             <div className="mr-3">
               <label className="block text-xs uppercase text-gray-300 tracking-wider">Guests</label>
                <select className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm appearance-none min-w-[60px]">
                   <option className="text-black">1 Adult</option>
                   <option className="text-black">2 Adults</option>
                </select>
             </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 w-full md:w-auto"
          >
            <button className="w-full md:w-auto bg-white text-dark-900 px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-gold-500 hover:text-white transition shadow-lg">
              Check Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
