import { Phone, MessageCircle, ExternalLink } from "lucide-react";

export default function TodaysFollowUps() {
  const data = [
    { customer: "Rahul Mathew", dest: "Kerala", exec: "Akhil", time: "10:30 AM", status: "Due", statusColor: "bg-rose-100 text-rose-600" },
    { customer: "Nisha Raj", dest: "Dubai", exec: "Fathima", time: "11:00 AM", status: "Due", statusColor: "bg-rose-100 text-rose-600" },
    { customer: "Jithin Jose", dest: "Kashmir", exec: "Amal", time: "02:30 PM", status: "Pending", statusColor: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Today's Follow-ups</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="text-gray-400 border-b border-gray-100">
            <tr>
              <th className="pb-2 font-medium">Customer</th>
              <th className="pb-2 font-medium">Destination</th>
              <th className="pb-2 font-medium">Executive</th>
              <th className="pb-2 font-medium">Time</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-800 font-medium">{row.customer}</td>
                <td className="py-3 text-gray-600">{row.dest}</td>
                <td className="py-3 text-gray-600">{row.exec}</td>
                <td className="py-3 text-gray-800 font-medium">{row.time}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${row.statusColor}`}>{row.status}</span>
                </td>
                <td className="py-3 flex items-center gap-2 text-gray-400">
                  <Phone size={14} className="hover:text-emerald-500 cursor-pointer" />
                  <MessageCircle size={14} className="hover:text-emerald-500 cursor-pointer" />
                  <ExternalLink size={14} className="hover:text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}