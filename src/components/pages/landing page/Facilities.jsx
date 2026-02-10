import { motion } from 'framer-motion'

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      ),
      title: "Rooms and Suites",
      description: "Relax in elegantly designed rooms and suites offering modern comfort, luxury amenities, and scenic views."
    },
    {
       id: 2,
       icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
       ),
       title: "24-Hour Security",
       description: "Enjoy peace of mind with our 24-hour security ensuring your safety and comfort throughout your stay."
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      ),
      title: "Fitness Center",
      description: "Stay active during your trip with our modern fitness center equipped with premium equipment.",
      highlight: true
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      title: "Swimming Pool",
      description: "Relax and unwind in our crystal-clear swimming pool, perfect for leisure, fun, and relaxation."
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-24 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="lg:w-1/3"
          >
             <div className="flex items-center space-x-4 mb-4">
              <span className="w-12 h-[1px] bg-gold-500"></span>
              <span className="text-gray-300 uppercase tracking-widest text-sm font-semibold">Our Facilities</span>
              <span className="w-12 h-[1px] bg-gold-500"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 loading-tight">
              Discover Our Exceptional Hotel Facilities
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We provide unmatched comfort, personalized service, and that make every guest feel truly special.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#b08d65" }} // gold-600
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {facilities.map((facility) => (
              <motion.div 
                key={facility.id} 
                variants={item}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl transition duration-500 group cursor-default bg-white/5 border border-white/10 hover:bg-white hover:border-white"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-white/10 text-white group-hover:bg-gold-500 transition duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-white group-hover:text-dark-900 transition duration-300">
                  {facility.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-600 transition duration-300">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
