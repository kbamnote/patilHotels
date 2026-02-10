import { motion } from 'framer-motion'

export default function Services() {
    return (
        <section className="py-24 px-8 bg-dark-900 text-white relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500 via-dark-900 to-dark-900"></div>
             
             <div className="max-w-7xl mx-auto relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                     >
                         <h2 className="text-4xl font-serif mb-6 leading-tight">Unparalleled <span className="text-gold-500">Service</span> at Your Fingertips</h2>
                         <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                             Our concierge team is dedicated to making your stay effortless. From private dining arrangements to exclusive city tours, we handle every detail with precision and care.
                         </p>
                         
                         <div className="space-y-6">
                             {[
                                 { title: "24-Hour Room Service", desc: "Gourmet dining delivered to your door, any time of day." },
                                 { title: "Private Butler", desc: "Personalized assistance for unpacking, itinerary planning, and more." },
                                 { title: "Chauffeur Service", desc: "Luxury airport transfers and city travel in our fleet of premium vehicles." }
                             ].map((service, i) => (
                                 <div key={i} className="flex items-start space-x-4">
                                     <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold text-xl">
                                         {i + 1}
                                     </div>
                                     <div>
                                         <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                                         <p className="text-sm text-gray-400">{service.desc}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </motion.div>

                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                     >
                         <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-3xl"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1559599542-c3f2b467d32c?q=80&w=2074&auto=format&fit=crop" 
                            alt="Butler Service" 
                            className="relative rounded-3xl shadow-2xl border border-white/10"
                         />
                     </motion.div>
                 </div>
             </div>
        </section>
    )
}
