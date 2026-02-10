import { motion } from 'framer-motion'
import { useRef } from 'react'
import WindowFrame from '../../common/WindowFrame'

export default function Offers() {
  const containerRef = useRef(null)
  return (
    <section ref={containerRef} className="py-24 px-8 bg-gold-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="flex items-center space-x-4 mb-4"
        >
           <span className="w-12 h-[1px] bg-gold-600"></span>
           <span className="text-gold-800 uppercase tracking-widest text-sm font-semibold">Special Offers</span>
           <span className="w-12 h-[1px] bg-gold-600"></span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark-900 leading-tight"
          >
            Our Special Offers
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="mt-8 lg:mt-0 max-w-md text-right"
          >
             <p className="text-gray-600 mb-6">Experience world-class hospitality where luxury, comfort, unforgettable perfect hotel stay.</p>
             <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#b08d65" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition shadow-lg"
             >
                View More
             </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Offers List */}
          <div className="space-y-12">
            
            {/* Offer 1 - Active */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl font-serif font-bold text-dark-900 mb-6">Family Fun Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-gold-600">✓</span>
                  <span>A two-night stay in a room</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                   <span className="text-gold-600">✓</span>
                   <span>Daily spa treatments</span>
                </div>
                 <div className="flex items-center space-x-2 text-gray-600">
                   <span className="text-gold-600">✓</span>
                   <span>Healthy breakfast and lunch</span>
                </div>
                 <div className="flex items-center space-x-2 text-gray-600">
                   <span className="text-gold-600">✓</span>
                   <span>Access to all spa facilities</span>
                </div>
              </div>
              <div className="flex items-baseline space-x-4">
                <span className="text-gray-400 line-through text-xl">$79.00</span>
                <span className="text-gold-600 text-3xl font-serif font-bold">$49.00</span>
              </div>
            </motion.div>

             {/* Offer 2 - Collapsed */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="group cursor-pointer opacity-60 hover:opacity-100 transition"
            >
              <h3 className="text-3xl font-serif text-gray-400 group-hover:text-dark-900 transition font-medium">Spa Retreat</h3>
            </motion.div>

            {/* Offer 3 - Collapsed */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="group cursor-pointer opacity-60 hover:opacity-100 transition"
            >
              <h3 className="text-3xl font-serif text-gray-400 group-hover:text-dark-900 transition font-medium">Romantic Getaway</h3>
            </motion.div>
             
             {/* Offer 4 - Collapsed */}
             <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ amount: 0.3 }}
              className="group cursor-pointer opacity-60 hover:opacity-100 transition"
            >
              <h3 className="text-3xl font-serif text-gray-400 group-hover:text-dark-900 transition font-medium">Signature Suite</h3>
            </motion.div>
          </div>

          {/* Feature Image */}
          <WindowFrame 
             src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
             alt="Special Offer Room"
             height="h-[600px]"
             className="rounded-3xl shadow-2xl"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </WindowFrame>
        </div>

      </div>
    </section>
  )
}
