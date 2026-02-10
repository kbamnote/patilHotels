import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="/*pt-20 min-h-screen bg-white*/">
      {/* Header Section */}
      <section className="bg-dark-900 text-white py-29 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="flex items-center justify-center space-x-4 mb-4"
            >
              <span className="w-12 h-[1px] bg-gold-500"></span>
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Get in Touch</span>
              <span className="w-12 h-[1px] bg-gold-500"></span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif mb-6"
            >
                Contact Us
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            >
               We are here to assist you with any inquiries or requests. Please reach out to us, and our team will get back to you promptly.
            </motion.p>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div>
                   <h2 className="text-4xl font-serif text-dark-900 mb-6 font-bold">Information</h2>
                   <p className="text-gray-600 leading-relaxed mb-8">
                       Our dedicated team is available 24/7 to ensure your stay is perfect. Feel free to contact us via phone, email, or by visiting us at our location.
                   </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                        <div className="bg-gold-50 p-4 rounded-full text-gold-600">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-dark-900 mb-1">Address</h3>
                            <p className="text-gray-600">123 Luxury Avenue,<br />Paris, France 75001</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6">
                        <div className="bg-gold-50 p-4 rounded-full text-gold-600">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-dark-900 mb-1">Phone</h3>
                            <p className="text-gray-600">+33 1 23 45 67 89</p>
                            <p className="text-gray-500 text-sm">Mon - Fri, 8am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6">
                         <div className="bg-gold-50 p-4 rounded-full text-gold-600">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-dark-900 mb-1">Email</h3>
                            <p className="text-gray-600">reservations@PATILhotels.com</p>
                            <p className="text-gray-600">info@PATILhotels.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ amount: 0.3 }}
                 transition={{ duration: 0.8 }}
                 className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-lg"
            >
                 <h2 className="text-3xl font-serif text-dark-900 mb-8 font-bold">Send us a Message</h2>
                 
                 {isSuccess && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-sm"
                    >
                        Thank you! Your message has been sent successfully.
                    </motion.div>
                 )}

                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject</label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                            placeholder="Reservation Inquiry"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                        <textarea 
                            rows="5"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-dark-900 text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-widest hover:bg-gold-600 transition duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                 </form>
            </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
             {/* This would be a real map iframe in production */}
             <div className="text-center">
                 <p className="text-xl font-bold mb-2">Google Map Integration</p>
                 <p>123 Luxury Avenue, Paris, France</p>
                 <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-4 text-gold-600 underline hover:text-gold-800"
                 >
                    View on Google Maps
                 </a>
             </div>
          </div>
           {/* Decorative Overlay */}
           <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>
    </div>
  )
}
