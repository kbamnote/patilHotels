import { motion } from 'framer-motion'

const images = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
]

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-dark-900 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-serif text-white mb-4">A Visual Journey</h2>
                <p className="text-gray-400">Glimpses of paradise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative overflow-hidden group rounded-xl h-80"
                    >
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition duration-500 z-10"></div>
                        <img 
                            src={src} 
                            alt={`Gallery ${index + 1}`} 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
