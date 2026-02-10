import { motion, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import gl0 from '../../../assets/gl0.webp'
import gl1 from '../../../assets/gl1.webp'
import gl2 from '../../../assets/gl2.webp'
import gl3 from '../../../assets/gl3.webp'
import gl4 from '../../../assets/gl4.webp'
import gl5 from '../../../assets/gl5.webp'
import gl6 from '../../../assets/gl6.webp'

export default function RoomsCarousel() {
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const carousel = useRef()
  const x = useMotionValue(0)
  const animationRef = useRef(null)

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  // Auto-scroll animation
  useEffect(() => {
    if (!width || isHovered) return

    const startAutoScroll = () => {
      const currentX = x.get()
      
      // If we've reached the end, reset to start
      if (currentX <= -width) {
        x.set(0)
      }

      // Animate to the end
      animationRef.current = animate(x, -width, {
        duration: 30, // Adjust speed here (higher = slower)
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onRepeat: () => {
          x.set(0)
        }
      })
    }

    startAutoScroll()

    return () => {
      if (animationRef.current) {
        animationRef.current.stop()
      }
    }
  }, [width, x, isHovered])

  const scrollLeft = () => {
    const currentX = x.get()
    const newX = Math.min(currentX + 400, 0)
    animate(x, newX, { duration: 0.5, ease: "easeOut" })
  }

  const scrollRight = () => {
    const currentX = x.get()
    const newX = Math.max(currentX - 400, -width)
    animate(x, newX, { duration: 0.5, ease: "easeOut" })
  }

  const rooms = [
    { id: 1, image: gl0, title: "Deluxe Suite" },
    { id: 2, image: gl1, title: "Executive Room" },
    { id: 3, image: gl2, title: "Presidential Suite" },
    { id: 4, image: gl3, title: "Ocean View" },
    { id: 5, image: gl4, title: "Modern Studio" },
    { id: 6, image: gl5, title: "Family Room" },
    { id: 7, image: gl6, title: "Royal Suite" }
  ]

  return (
    <section className="py-24 bg-gold-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
            {/* Header */}
            <div className="text-center mb-16">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                    className="flex items-center justify-center space-x-4 mb-4"
                >
                    <button onClick={scrollLeft} className="text-gold-600 hover:text-gold-800 transition transform hover:scale-125 cursor-pointer text-2xl">◀</button>
                    <span className="w-12 h-[1px] bg-gold-300"></span>
                    <span className="text-gold-800 uppercase tracking-widest text-sm font-semibold">Our Hotel & Resort</span>
                    <span className="w-12 h-[1px] bg-gold-300"></span>
                    <button onClick={scrollRight} className="text-gold-600 hover:text-gold-800 transition transform hover:scale-125 cursor-pointer text-2xl">▶</button>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                    className="text-5xl md:text-6xl font-serif font-bold text-dark-900 mb-6"
                >
                    Explore Our Elegant Rooms
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ amount: 0.3 }}
                    className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Thoughtfully designed spaces where comfort meets style. Each room at Patil Hotels offers a peaceful retreat with modern amenities and attentive service.
                </motion.p>

                <motion.button 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ amount: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#b08d65" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold-500 text-white px-10 py-3 rounded-xl font-bold uppercase text-sm tracking-widest transition shadow-lg"
                >
                    View More
                </motion.button>
            </div>

            {/* Carousel */}
             <motion.div 
                ref={carousel} 
                className="cursor-grab overflow-hidden" 
                whileTap={{ cursor: "grabbing" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ amount: 0.1 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
             >
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ x }}
                    className="flex space-x-8"
                >
                    {rooms.map((room) => (
                        <motion.div 
                            key={room.id} 
                            className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden relative shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                                src={room.image} 
                                alt={room.title} 
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-2xl text-white font-serif font-bold">{room.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}