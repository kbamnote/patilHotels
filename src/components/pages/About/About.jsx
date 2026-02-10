import { motion } from 'framer-motion'
import { useEffect } from 'react'

import Values from './Values'
import History from './History'
import Team from './Team'
import Sustainability from './Sustainability'
import Gallery from './Gallery'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="/*pt-20 min-h-screen bg-white*/">
      {/* Header Section */}
      <section className="bg-dark-900 text-white py-29 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="flex items-center justify-center space-x-4 mb-4"
            >
              <span className="w-12 h-[1px] bg-gold-500"></span>
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Our Story</span>
              <span className="w-12 h-[1px] bg-gold-500"></span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif mb-6"
            >
                A Legacy of Luxury
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            >
                Patil Hotels brings premium hospitality to Nagpur, combining elegant accommodations with personalized service for business travelers, families, and celebrations.
            </motion.p>
        </div>
      </section>

      {/* Modular Sections */}
      <Values />
      <Sustainability />
      <History />
      <Gallery />
      <Team />

    </div>
  )
}
