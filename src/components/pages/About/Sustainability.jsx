import { motion } from 'framer-motion'

export default function Sustainability() {
    return (
        <section className="py-24 px-8 bg-white relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -skew-x-12 transform translate-x-20"></div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                     transition={{ duration: 0.8 }}
                >
                     <span className="text-green-800 font-bold uppercase tracking-widest text-sm mb-2 block">Our Commitment</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Sustainable Luxury</h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        At PATIL Hotels, we believe that luxury stays shouldn't cost the Earth. We are dedicated to minimizing our environmental footprint while maintaining the highest standards of hospitality.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {["Zero-waste kitchens", "Solar-powered heating", "Locally sourced amenities", "Paperless check-in"].map((item, i) => (
                             <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                                 <span className="text-green-600">🌿</span>
                                 <span>{item}</span>
                             </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.3 }}
                     transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <img src="src/assets/gl0.webp" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12" alt="Nature" />
                    <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Garden" />
                </motion.div>

            </div>
        </section>
    )
}
