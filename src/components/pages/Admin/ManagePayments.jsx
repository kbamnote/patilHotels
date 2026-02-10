import { Download } from 'lucide-react'

export default function ManagePayments() {
  const transactions = [
    { id: "TXN-8742", date: "2023-10-15", amount: "$1,200.00", status: "Success", method: "Credit Card (**** 4242)" },
    { id: "TXN-8743", date: "2023-10-14", amount: "$450.00", status: "Success", method: "PayPal" },
    { id: "TXN-8744", date: "2023-10-12", amount: "$2,600.00", status: "Pending", method: "Bank Transfer" },
    { id: "TXN-8745", date: "2023-10-10", amount: "$150.00", status: "Failed", method: "Credit Card (**** 1234)" },
  ]

  return (
    <div className="p-8 font-sans w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-dark-900">Manage Payments</h1>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Method</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-dark-900">{txn.id}</td>
                  <td className="p-4 text-gray-500 text-sm">{txn.date}</td>
                  <td className="p-4 font-bold text-dark-900">{txn.amount}</td>
                  <td className="p-4 text-gray-500 text-sm">{txn.method}</td>
                  <td className="p-4">
                     <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        txn.status === 'Success' ? 'bg-green-100 text-green-600' : 
                        txn.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                        'bg-red-100 text-red-600'
                     }`}>
                        {txn.status}
                     </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-dark-900 transition p-2 hover:bg-gray-100 rounded-full">
                       <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
