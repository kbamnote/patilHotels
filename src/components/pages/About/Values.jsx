import { motion } from 'framer-motion'

export default function Values() {
  return (
      <section className="py-24 px-8 bg-gold-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop" 
                    alt="Hotel Interior" 
                    className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-serif text-dark-900 mb-6 font-bold">Timeless Elegance, Modern Comfort</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    We believe that true luxury lies in the details. From the moment you step into our lobby, you are enveloped in an atmosphere of sophistication and warmth. Our dedicated staff is committed to anticipating your every need, ensuring that your stay is nothing short of perfection.
                </p>
                <p className="text-gray-600 leading-relaxed">
                   Our mission is to create a home away from home, where tradition meets innovation. We carefully curate every aspect of your experience, from our locally sourced dining options to our state-of-the-art wellness facilities.
                </p>
            </motion.div>
        </div>
      </section>
  )
}
