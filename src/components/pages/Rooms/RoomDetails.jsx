import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { rooms } from '../../../data/roomsData'

export default function RoomDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = rooms.find(r => r.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h2 className="text-3xl font-serif text-dark-900 mb-4">Room Not Found</h2>
        <button 
          onClick={() => navigate('/rooms')}
          className="bg-gold-600 text-white px-8 py-3 rounded-full uppercase tracking-widest hover:bg-gold-500 transition"
        >
          View All Rooms
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh]">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{room.name}</h1>
            <p className="text-gold-400 text-xl uppercase tracking-widest font-medium">Luxury Accommodations</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-8 justify-between border-b border-gray-100 pb-8">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Size</p>
                <p className="text-xl font-serif text-dark-900">{room.size}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Occupancy</p>
                <p className="text-xl font-serif text-dark-900">{room.guests}</p>
              </div>
              <div>
                 <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Price</p>
                 <p className="text-xl font-serif text-gold-600">{room.price} <span className="text-sm text-gray-400 font-sans">/ Night</span></p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-serif text-dark-900 mb-6">About This Room</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-2xl font-serif text-dark-900 mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 p-8 rounded-xl sticky top-28 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-serif text-dark-900 mb-2">Book Your Stay</h3>
              <p className="text-gray-500 text-sm mb-6">Best rates guaranteed when booking directly.</p>
              
              <div className="space-y-4 mb-6">
                 <div className="bg-white p-3 rounded border border-gray-200">
                    <label className="block text-xs uppercase text-gray-400 mb-1">Check In</label>
                    <input type="date" className="w-full outline-none text-dark-900" />
                 </div>
                 <div className="bg-white p-3 rounded border border-gray-200">
                    <label className="block text-xs uppercase text-gray-400 mb-1">Check Out</label>
                    <input type="date" className="w-full outline-none text-dark-900" />
                 </div>
                 <div className="bg-white p-3 rounded border border-gray-200">
                    <label className="block text-xs uppercase text-gray-400 mb-1">Guests</label>
                    <select className="w-full outline-none text-dark-900 bg-transparent">
                       <option>1 Adult</option>
                       <option>2 Adults</option>
                       <option>2 Adults, 1 Child</option>
                    </select>
                 </div>
              </div>

              <button className="w-full bg-dark-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-gold-600 transition duration-300">
                Check Availability
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
