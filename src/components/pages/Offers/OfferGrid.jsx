import { motion } from 'framer-motion'

const offers = [
  {
    id: 1,
    title: "Romantic Getaway",
    subtitle: "Couple's Retreat",
    description: "Escape to paradise with your loved one. Enjoy a candlelit dinner, couple's massage, and a complimentary bottle of champagne upon arrival.",
    price: "From $850 / night",
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
    features: ["Champagne on Arrival", "Couple's Massage (60 min)", "Romantic Dinner for Two", "Late Check-out"]
  },
  {
    id: 2,
    title: "Weekend Recharge",
    subtitle: "Staycation Special",
    description: "Take a break from the city bustle. Indulge in our spa facilities, enjoy a gourmet breakfast, and relax in our luxurious rooms.",
    price: "From $550 / night",
    image: "src/assets/francesca-saraco-_dS27XGgRyQ-unsplash.jpg",
    features: ["Daily Breakfast Buffet", "$100 Spa Credit", "Access to Fitness Center", "Free Wi-Fi"]
  },
  {
    id: 3,
    title: "Family Fun Package",
    subtitle: "Memories to Last a Lifetime",
    description: "The perfect vacation for the whole family. Kids eat free, and we offer a range of activities to keep everyone entertained.",
    price: "From $950 / night",
    image: "src/assets/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg",
    features: ["Kids Eat Free (under 12)", "Family Room Upgrade", "Kids' Club Access", "Welcome Gift for Kids"]
  },
  {
    id: 4,
    title: "Business PATIL",
    subtitle: "Work & Relax",
    description: "Seamlessly blend business with leisure. High-speed internet, meeting room access, and express laundry service included.",
    price: "From $600 / night",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    features: ["High-Speed Wi-Fi", "Meeting Room Access (2 hrs)", "Express Laundry", "Executive Lounge Access"]
  }
]

export default function OfferGrid() {
    return (
      <section className="py-24 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {offers.map((offer, index) => (
                <motion.div 
                    key={offer.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group flex flex-col h-full"
                >
                    <div className="relative h-[300px] overflow-hidden">
                         <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/10 transition duration-500 z-10"></div>
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                            src={offer.image} 
                            alt={offer.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-dark-900 font-bold font-serif shadow-lg">
                            {offer.price}
                        </div>
                    </div>

                    <div className="p-10 flex flex-col flex-grow">
                        <div className="mb-6">
                            <span className="text-gold-600 text-sm font-bold uppercase tracking-widest mb-2 block">{offer.subtitle}</span>
                            <h3 className="text-3xl font-serif text-dark-900 mb-4 group-hover:text-gold-600 transition duration-300">{offer.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                        </div>
                        
                        <div className="mt-auto">
                             <div className="space-y-3 mb-8">
                                {offer.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full border border-dark-900 text-dark-900 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-dark-900 hover:text-white transition duration-300">
                                View Details & Book
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    )
}
