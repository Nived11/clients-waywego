import { Eye, Copy, MessageCircle, MoreVertical } from "lucide-react";

export default function RecentQuotations() {
  const data = [
    { no: "TH-Q-2025-0148", customer: "Rahul Mathew", dest: "Kerala 5D/4N", amount: "₹48,500", status: "Sent", bg: "bg-purple-100 text-purple-600" },
    { no: "TH-Q-2025-0147", customer: "Nisha Raj", dest: "Dubai 6D/5N", amount: "₹1,25,000", status: "Pending", bg: "bg-orange-100 text-orange-600" },
    { no: "TH-Q-2025-0146", customer: "Jithin Jose", dest: "Kashmir 6D/5N", amount: "₹62,000", status: "Sent", bg: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Recent Quotations</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="text-gray-400 border-b border-gray-100">
            <tr>
              <th className="pb-2 font-medium">Quotation No.</th>
              <th className="pb-2 font-medium">Customer</th>
              <th className="pb-2 font-medium">Amount</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-800 font-medium">{row.no}</td>
                <td className="py-3 text-gray-600">{row.customer}</td>
                <td className="py-3 text-gray-800 font-medium">{row.amount}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${row.bg}`}>{row.status}</span>
                </td>
                <td className="py-3 flex items-center gap-2 text-gray-400">
                  <Eye size={14} className="hover:text-blue-500 cursor-pointer" />
                  <Copy size={14} className="hover:text-blue-500 cursor-pointer" />
                  <MessageCircle size={14} className="hover:text-emerald-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}