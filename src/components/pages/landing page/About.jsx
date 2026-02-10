import { motion } from 'framer-motion'
import { useRef } from 'react'
import WindowFrame from '../../common/WindowFrame'

export default function About() {
  const containerRef = useRef(null)
  return (
    <section id="about" ref={containerRef} className="py-20 px-8 bg-gold-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Image & Stat */}
          <div className="flex flex-col space-y-12">
            {/* Image 1 */}
            <WindowFrame 
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Hotel Room"
              height="h-[400px]"
              className="rounded-3xl shadow-2xl"
            />

            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
              className="flex items-center justify-between border-t border-gold-200 pt-6"
            >
              <div>
                <div className="text-6xl font-serif text-dark-900 mb-2">
                  10<span className="text-4xl align-top text-gold-600">+</span>
                </div>
                <p className="text-gray-500 font-medium tracking-wide">Years serving Nagpur</p>
              </div>
              <div className="text-gold-600">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                 </svg>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Text Content & Stat */}
          <div className="flex flex-col space-y-12 lg:px-4 lg:pt-8">
            <div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ amount: 0.3 }}
                 className="flex items-center justify-center space-x-4 mb-6"
               >
                  <span className="w-12 h-[1px] bg-gold-600"></span>
                  <span className="text-gold-800 uppercase tracking-widest text-sm font-bold">About Us</span>
                  <span className="w-12 h-[1px] bg-gold-600"></span>
               </motion.div>

               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ amount: 0.3 }}
                 className="text-4xl lg:text-5xl font-serif font-bold text-dark-900 text-center mb-6 leading-tight"
               >
                  Where Comfort Meets Elegance in the Heart of Nagpur
               </motion.h2>

               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ amount: 0.3 }}
                 className="text-gray-600 text-center mb-8 leading-relaxed px-4"
               >
                  At Patil Hotels, we blend modern luxury with the warmth of Indian hospitality. Our elegant accommodations, thoughtful amenities, and personalized service create memorable experiences for business travelers, families, and guests celebrating life's special moments.
               </motion.p>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.6 }}
                 viewport={{ amount: 0.3 }}
                 className="text-center"
               >
                 <motion.button 
                    onClick={() => window.location.href = '/about'}
                    whileHover={{ scale: 1.05, backgroundColor: "#b08d65" }} 
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold-500 text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition shadow-lg"
                 >
                    More About Us
                 </motion.button>
               </motion.div>
            </div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="flex items-center justify-between border-t border-gold-200 pt-6"
            >
               <div>
                <div className="text-6xl font-serif text-dark-900 mb-2">
                  24<span className="text-4xl align-top text-gold-600">/7</span>
                </div>
                <p className="text-gray-500 font-medium tracking-wide">Guest services available</p>
              </div>
              <div className="text-gold-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Image 2 */}
          <div className="lg:mt-12">
             <WindowFrame 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Hotel Interior"
                height="h-[500px]"
                className="rounded-3xl shadow-2xl"
             />
          </div>

        </div>
      </div>
    </section>
  )
}
