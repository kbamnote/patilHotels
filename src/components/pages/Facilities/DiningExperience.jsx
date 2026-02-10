import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function DiningExperience() {
    const navigate = useNavigate()

    return (
        <section className="py-24 px-8 bg-dark-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto text-center">
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-4xl md:text-6xl font-serif mb-8"
                >
                    A Feast for the Senses
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-lg leading-relaxed mb-10"
                >
                    From the freshest seafood at The Ocean Grill to the avant-garde creations at L'Étoile, our dining venues offer a symphony of flavors. Join us for a culinary adventure that celebrates the art of food.
                </motion.p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="bg-gold-500 text-dark-900 px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-white transition duration-300"
                >
                    Reserve a Table
                </motion.button>
             </div>
        </section>
    )
}
