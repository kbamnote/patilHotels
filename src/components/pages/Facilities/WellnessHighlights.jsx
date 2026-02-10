import { motion } from 'framer-motion'

export default function WellnessHighlights() {
    return (
        <section className="bg-gold-50 py-24 px-8">
            <div className="max-w-7xl mx-auto">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-dark-900 mb-4 font-bold">Wellness Reimagined</h2>
                    <p className="text-gray-600">Rejuvenate your body and mind</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                         { title: "Holistic Massages", desc: "Signature treatments blending Eastern and Western techniques.", icon: "🧘‍♀️" },
                         { title: "Detox Programs", desc: "Curated nutrition and therapy plans for complete revitalization.", icon: "🥗" },
                         { title: "Mindfulness Sessions", desc: "Guided meditation and yoga in our serene garden studio.", icon: "🕉️" }
                     ].map((item, index) => (
                         <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
                         >
                             <div className="text-5xl mb-6">{item.icon}</div>
                             <h3 className="text-xl font-bold font-serif text-dark-900 mb-3">{item.title}</h3>
                             <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                         </motion.div>
                     ))}
                </div>
            </div>
        </section>
    )
}
