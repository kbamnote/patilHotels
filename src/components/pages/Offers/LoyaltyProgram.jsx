import { motion } from 'framer-motion'

export default function LoyaltyProgram() {
    return (
        <section className="py-24 px-8 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                 <div className="w-full md:w-1/2">
                      <motion.img 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        src="src/assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg" 
                        alt="Loyalty Card" 
                        className="rounded-2xl shadow-xl w-full"
                    />
                 </div>
                 <div className="w-full md:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                      >
                           <h2 className="text-4xl font-serif text-dark-900 mb-6">PATIL Rewards Program</h2>
                           <p className="text-gray-600 text-lg leading-relaxed mb-8">
                               Join our loyalty program and earn points for every stay. Unlock exclusive benefits including:
                           </p>
                           <ul className="space-y-4 mb-8">
                               {[
                                   "Room upgrades upon availability",
                                   "Early check-in and late check-out",
                                   "Exclusive member-only rates",
                                   "Complimentary welcome drinks"
                               ].map((item, i) => (
                                   <li key={i} className="flex items-center space-x-3 text-gold-600 font-bold">
                                       <span>🏆</span>
                                       <span className="text-dark-900 font-medium">{item}</span>
                                   </li>
                               ))}
                           </ul>
                           <button className="border-2 border-dark-900 text-dark-900 px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-dark-900 hover:text-white transition duration-300">
                               Learn More & Join
                           </button>
                      </motion.div>
                 </div>
            </div>
        </section>
    )
}
