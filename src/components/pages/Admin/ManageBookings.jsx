import { Eye, CheckCircle, XCircle } from 'lucide-react'

export default function ManageBookings() {
  const bookings = [
    { id: 101, guest: "John Doe", room: "Presidential Suite", checkIn: "2023-10-15", checkOut: "2023-10-20", status: "Confirmed", total: "$6,000" },
    { id: 102, guest: "Jane Smith", room: "Deluxe Ocean View", checkIn: "2023-11-01", checkOut: "2023-11-05", status: "Pending", total: "$2,600" },
    { id: 103, guest: "Alice Johnson", room: "Executive King", checkIn: "2023-12-24", checkOut: "2023-12-28", status: "Cancelled", total: "$1,800" },
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-600';
      case 'Pending': return 'bg-yellow-100 text-yellow-600';
      case 'Cancelled': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  }

  return (
    <div className="p-8 font-sans w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-dark-900">Manage Bookings</h1>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Guest</th>
                <th className="p-4 font-medium">Room</th>
                <th className="p-4 font-medium">Dates</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Total</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-500">#{booking.id}</td>
                  <td className="p-4 font-medium text-dark-900">{booking.guest}</td>
                  <td className="p-4 text-gray-600 text-sm">{booking.room}</td>
                  <td className="p-4 text-gray-500 text-xs">
                    <div>In: {booking.checkIn}</div>
                    <div>Out: {booking.checkOut}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold text-dark-900">{booking.total}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-gold-600 transition"><Eye size={18} /></button>
                    {booking.status === 'Pending' && (
                       <>
                        <button className="text-green-500 hover:text-green-600 transition"><CheckCircle size={18} /></button>
                        <button className="text-red-500 hover:text-red-600 transition"><XCircle size={18} /></button>
                       </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
