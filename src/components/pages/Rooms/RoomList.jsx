import { motion } from 'framer-motion'

import { rooms } from '../../../data/roomsData'
import { useNavigate } from 'react-router-dom'

export default function RoomList() {
    const navigate = useNavigate()
    return (
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-dark-900 mb-4 font-bold">Our Collection</h2>
             <p className="text-gray-500">Choose the perfect sanctuary for your stay</p>
         </div>
        <div className="grid grid-cols-1 gap-20">
            {rooms.map((room, index) => (
                <motion.div 
                    key={room.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl group">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                            src={room.image} 
                            alt={room.name} 
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex justify-between items-start border-b border-gold-200 pb-4">
                            <div>
                                <h3 className="text-3xl font-serif text-dark-900 mb-2">{room.name}</h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 uppercase tracking-wide">
                                    <span>{room.size}</span>
                                    <span>•</span>
                                    <span>{room.guests}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-serif text-gold-600 font-bold">{room.price}</p>
                                <p className="text-xs text-gray-400">/ Night</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {room.description}
                        </p>

                        <div className="pt-4">
                            <button 
                                onClick={() => navigate(`/rooms/${room.id}`)}
                                className="bg-dark-900 text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-gold-600 transition duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    )
}
