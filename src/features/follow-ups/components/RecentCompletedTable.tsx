import { Phone, MessageCircle, Mail } from "lucide-react";

export default function RecentCompletedTable() {
  const completed = [
    { name: "Rakesh Nair", dest: "Dubai", time: "09:00 AM", exec: "Fathima", execImg: "https://i.pravatar.cc/150?u=fathima", method: "WhatsApp", notes: "Shared package details", comp: "20 May, 09:05 AM" },
    { name: "Fathima Parveen", dest: "Andaman", time: "09:30 AM", exec: "Nisha", execImg: "https://i.pravatar.cc/150?u=nisha", method: "Call", notes: "Customer interested, will revert tomorrow", comp: "20 May, 09:35 AM" },
    { name: "Thomas K", dest: "Thailand", time: "10:00 AM", exec: "Amal", execImg: "https://i.pravatar.cc/150?u=amal", method: "Email", notes: "Quotation sent", comp: "20 May, 10:05 AM" },
  ];

  const getMethodIcon = (m: string) => {
    switch (m) {
      case 'Call': return <Phone size={12} className="text-blue-500" />;
      case 'WhatsApp': return <MessageCircle size={12} className="text-emerald-500" />;
      case 'Email': return <Mail size={12} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-gray-800">Recent Completed Follow-ups</h3>
          <p className="text-[10px] text-gray-400 font-medium">Recently completed follow-up tasks from today.</p>
        </div>
        <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
      </div>
      
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-[11px] min-w-[800px]">
          <thead className="text-gray-400 font-bold border-b border-gray-50 bg-gray-50/30">
            <tr>
              <th className="py-2.5 px-4">Customer</th>
              <th className="py-2.5 px-3">Destination</th>
              <th className="py-2.5 px-3">Follow-up Time</th>
              <th className="py-2.5 px-3">Executive</th>
              <th className="py-2.5 px-3">Contact Method</th>
              <th className="py-2.5 px-3">Notes</th>
              <th className="py-2.5 px-4">Completed At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {completed.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50">
                <td className="py-2.5 px-4 font-bold text-gray-800">{row.name}</td>
                <td className="py-2.5 px-3 font-semibold text-gray-600">{row.dest}</td>
                <td className="py-2.5 px-3 font-bold text-gray-700">{row.time}</td>
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-2">
                    <img src={row.execImg} alt={row.exec} className="w-5 h-5 rounded-full object-cover" />
                    <span className="font-bold text-gray-700">{row.exec}</span>
                  </div>
                </td>
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-1.5 font-semibold text-gray-600">
                    {getMethodIcon(row.method)} {row.method}
                  </div>
                </td>
                <td className="py-2.5 px-3 text-gray-500">{row.notes}</td>
                <td className="py-2.5 px-4 font-medium text-gray-500">{row.comp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}