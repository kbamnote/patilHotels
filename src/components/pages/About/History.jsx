import { motion } from 'framer-motion'

const history = [
  {
    year: "1985",
    title: "The Beginning",
    description: "Founded by the visionary hotelier, James PATIL, with a single property in Paris."
  },
  {
    year: "1995",
    title: "Global Expansion",
    description: "Expanded to 10 major cities worldwide, setting a new standard for luxury hospitality."
  },
  {
    year: "2010",
    title: "Green Initiative",
    description: "Launched our sustainability program, becoming the first carbon-neutral luxury hotel chain."
  },
  {
    year: "2024",
    title: "New Horizons",
    description: "Continuing to redefine elegance with our new flagship resort in the Maldives."
  }
]

export default function History() {
  return (
      <section className="py-24 px-8 max-w-7xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            className="text-center mb-16"
        >
             <h2 className="text-4xl font-serif text-dark-900 mb-4 font-bold">Our Journey</h2>
             <p className="text-gray-500">Milestones that defined our path to excellence</p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {history.map((item, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white border border-gold-200 p-8 rounded-2xl hover:shadow-lg transition duration-300"
                 >
                     <div className="text-4xl font-serif text-gold-600 mb-4">{item.year}</div>
                     <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                     <p className="text-gray-600 text-sm">{item.description}</p>
                 </motion.div>
             ))}
         </div>
      </section>
  )
}
