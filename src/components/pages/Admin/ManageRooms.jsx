import { rooms } from '../../../data/roomsData'
import { Pencil, Trash2, Plus } from 'lucide-react'

export default function ManageRooms() {
  return (
    <div className="p-8 font-sans w-full">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-dark-900">Manage Rooms</h1>
          <button className="bg-gold-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gold-500 transition">
            <Plus size={18} />
            <span>Add Room</span>
          </button>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 font-medium">Image</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Occupancy</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50 transition">
                  <td className="p-4">
                    <img src={room.image} alt={room.name} className="w-16 h-10 object-cover rounded" />
                  </td>
                  <td className="p-4 font-medium text-dark-900">{room.name}</td>
                  <td className="p-4 text-gold-600 font-bold">{room.price}</td>
                  <td className="p-4 text-gray-500 text-sm">{room.guests}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="text-blue-500 hover:text-blue-600 p-1"><Pencil size={18} /></button>
                    <button className="text-red-500 hover:text-red-600 p-1"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
