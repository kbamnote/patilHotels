import { motion } from 'framer-motion'

const team = [
  {
    name: "Thomas Wright",
    role: "General Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Michael Ross",
    role: "Chief Concierge",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Team() {
  return (
      <section className="py-24 px-8 bg-white text-dark-900">
        <div className="max-w-7xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-serif mb-4">Meet Our Team</h2>
                <p className="text-gray-400">The people behind the exceptional service</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {team.map((member, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="text-center group"
                    >
                        <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 border-4 border-gold-500">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gold-500 mb-1">{member.name}</h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
  )
}
