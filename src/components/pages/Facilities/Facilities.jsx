import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FacilityList from './FacilityList'

export default function FacilitiesPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className=" min-h-screen bg-white overflow-x-hidden">
            {/* Header Section */}
            <section className="bg-dark-900 text-white py-29 px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center space-x-4 mb-4"
                    >
                        <span className="w-12 h-[1px] bg-gold-500"></span>
                        <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Amenities</span>
                        <span className="w-12 h-[1px] bg-gold-500"></span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        World-Class Facilities
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Experience the height of luxury with our comprehensive range of leisure and business facilities, designed to cater to your every need.
                    </motion.p>
                </div>
            </section>

            {/* Facilities Sections */}
            <FacilityList />
            
             {/* CTA Section */}
            <section className="bg-gold-50 py-24 px-8 text-center mt-20">
                 <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-6">Ready to Experience PATIL Luxury?</h2>
                    <p className="text-gray-600 mb-8">Book your stay today and enjoy exclusive access to all our premium facilities.</p>
                     <button className="bg-dark-900 text-white px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-gold-600 transition duration-300 shadow-xl">
                        Book Your Stay Now
                    </button>
                 </div>
            </section>
        </div>
    )
}
