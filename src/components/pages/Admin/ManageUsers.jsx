import { MoreVertical, Mail, Phone } from 'lucide-react'

export default function ManageUsers() {
  const users = [
    { id: 1, name: "Pranay Charde", email: "pranay@example.com", phone: "+1 234 567 890", role: "Admin", joinDate: "2023-01-15" },
    { id: 2, name: "John Doe", email: "john@example.com", phone: "+1 987 654 321", role: "Guest", joinDate: "2023-05-20" },
    { id: 3, name: "Jane Smith", email: "jane@example.com", phone: "+1 555 123 456", role: "Guest", joinDate: "2023-06-10" },
  ]

  return (
    <div className="p-8 font-sans w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-dark-900">Manage Users</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center font-bold text-xl">
                      {user.name.charAt(0)}
                   </div>
                   <div>
                      <h3 className="font-bold text-dark-900">{user.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">{user.role}</span>
                   </div>
                 </div>
                 <button className="text-gray-400 hover:text-dark-900"><MoreVertical size={18} /></button>
              </div>
              
              <div className="space-y-3 mt-2 flex-1">
                 <div className="flex items-center space-x-3 text-gray-500 text-sm">
                   <Mail size={16} />
                   <span>{user.email}</span>
                 </div>
                 <div className="flex items-center space-x-3 text-gray-500 text-sm">
                   <Phone size={16} />
                   <span>{user.phone}</span>
                 </div>
              </div>
              
              <div className="border-t border-gray-100 mt-6 pt-4 text-xs text-gray-400 flex justify-between">
                 <span>Member since</span>
                 <span>{user.joinDate}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
