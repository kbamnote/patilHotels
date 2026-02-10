import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function WindowFrame({ src, alt, className = "", height = "h-[400px]", children }) {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax effect: Image moves slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className} ${height}`}>
      {/* Mask Reveal Overlay */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} // Bezier for smooth "shutter" feel
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0 bg-gold-100 z-20 pointer-events-none"
      />

      {/* Parallax Image */}
      <motion.div className="w-full h-full relative z-10">
        <motion.img 
          style={{ y, scale }}
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
        {/* Shadow Overlay for depth */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none mix-blend-multiply"></div>
        {/* Custom Overlays (children) */}
        {children}
      </motion.div>
    </div>
  )
}
