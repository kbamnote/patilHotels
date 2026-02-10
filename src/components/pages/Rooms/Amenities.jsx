import { motion } from 'framer-motion'

export default function Amenities() {
    return (
        <section className="py-24 px-8 bg-gold-50">
             <div className="max-w-7xl mx-auto">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-dark-900 mb-4 font-bold">Refined Amenities</h2>
                    <p className="text-gray-500">Thoughtful touches to elevate your stay</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     {[
                         { icon: "🛁", title: "Luxury Bath Products", desc: "Premium toiletries from Le Labo" },
                         { icon: "🛌", title: "Premium Bedding", desc: "400-thread count Egyptian cotton sheets" },
                         { icon: "☕", title: "Nespresso Machine", desc: "Complimentary coffee and tea selection" },
                         { icon: "📶", title: "High-Speed Wi-Fi", desc: "Seamless connectivity throughout" },
                         { icon: "📺", title: "Smart Entertainment", desc: "65-inch 4K TV with streaming apps" },
                         { icon: "🍷", title: "Mini Bar", desc: "Curated selection of fine wines and snacks" },
                         { icon: "🧹", title: "Twice-Daily Housekeeping", desc: "Includes evening turndown service" },
                         { icon: "👘", title: "Plush Robes", desc: "Soft bathrobes and slippers" }
                     ].map((item, index) => (
                         <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center"
                         >
                             <div className="text-4xl mb-4">{item.icon}</div>
                             <h3 className="text-lg font-bold text-dark-900 mb-2">{item.title}</h3>
                             <p className="text-sm text-gray-500">{item.desc}</p>
                         </motion.div>
                     ))}
                </div>
             </div>
        </section>
    )
}
