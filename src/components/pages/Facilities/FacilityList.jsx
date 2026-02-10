import { motion } from 'framer-motion'

import romanSuslovImg from '../../../assets/roman-suslov-mW45Jp3xATI-unsplash.jpg'
import ambitiousStudioImg from '../../../assets/ambitious-studio-rick-barrett-Ksl3D9tlfWs-unsplash.jpg'
import antonioAraujoImg from '../../../assets/antonio-araujo-67DQVOLWN3c-unsplash.jpg'

const facilities = [
    {
        id: "spa",
        title: "The Royal Games",
        subtitle: "A Sanctuary for the Senses",
        description: "Immerse yourself in tranquility at our world-class spa. Offering a range of holistic treatments inspired by ancient traditions and modern wellness techniques, our expert therapists are dedicated to your rejuvenation.",
        features: ["Thermal Suites", "Hydrotherapy Pool", "Private Treatment Villas", "Wellness Cafe"],
        image: romanSuslovImg,
        reverse: false
    },
    {
        id: "fitness",
        title: "PATIL Fitness Center",
        subtitle: "Peak Performance, Premium Equipment",
        description: "Maintain your regimen in our state-of-the-art fitness center, equipped with the latest Technogym cardio and resistance machines. Personal trainers are available upon request to guide your workout.",
        features: ["24/7 Access", "Technogym Equipment", "Yoga Studio", "Personal Training"],
        image: ambitiousStudioImg,
        reverse: true
    },
    {
        id: "pool",
        title: "Infinity Pool",
        subtitle: "Swim with a View",
        description: "Our stunning infinity pool blends seamlessly with the horizon, offering breathtaking views of the city skyline. Relax in a private cabana or enjoy a refreshing cocktail from the poolside bar.",
        features: ["Heated Water", "Private Cabanas", "Poolside Bar", "Towel Service"],
        image: antonioAraujoImg,
        reverse: false
    },
    {
        id: "dining",
        title: "Fine Dining",
        subtitle: "Culinary Excellence",
        description: "Embark on a gastronomic journey at our award-winning restaurants. From authentic local cuisine to international favorites, our chefs use only the finest ingredients to create unforgettable dining experiences.",
        features: ["Michelin-starred Chefs", "Private Dining Rooms", "Wine Cellar", "Rooftop Terrace"],
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        reverse: true
    }
]

export default function FacilityList() {
    return (
        <section className="py-20 px-8 max-w-[1400px] mx-auto space-y-32">
            {facilities.map((facility, index) => (
                <motion.div 
                    key={facility.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${facility.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                >
                        {/* Image */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-gold-500 transform translate-x-4 translate-y-4 rounded-3xl -z-10 transition duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                src={facility.image} 
                                alt={facility.title} 
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center space-x-3 text-gold-600 mb-2">
                            <span className="text-sm font-bold tracking-widest uppercase">{facility.subtitle}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-900 leading-tight">{facility.title}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">{facility.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {facility.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-2 text-gray-700">
                                    <span className="text-gold-500">✦</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    )
}
