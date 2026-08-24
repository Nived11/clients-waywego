export default function RecentEnquiries() {
  const data = [
    { customer: "Arjun P", dest: "Kerala", date: "15 Jun 2025", source: "Website", exec: "Akhil", status: "Requirement", bg: "bg-sky-100 text-sky-600" },
    { customer: "Nisha K", dest: "Dubai", date: "20 Aug 2025", source: "WhatsApp", exec: "Fathima", status: "Quotation Sent", bg: "bg-purple-100 text-purple-600" },
    { customer: "Jithin J", dest: "Kashmir", date: "10 Jul 2025", source: "Meta Ads", exec: "Amal", status: "Follow-up", bg: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Recent Enquiries</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="text-gray-400 border-b border-gray-100">
            <tr>
              <th className="pb-2 font-medium">Customer</th>
              <th className="pb-2 font-medium">Destination</th>
              <th className="pb-2 font-medium">Travel Date</th>
              <th className="pb-2 font-medium">Source</th>
              <th className="pb-2 font-medium">Assigned To</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-800 font-medium">{row.customer}</td>
                <td className="py-3 text-gray-600">{row.dest}</td>
                <td className="py-3 text-gray-600">{row.date}</td>
                <td className="py-3 text-gray-600">{row.source}</td>
                <td className="py-3 text-gray-600">{row.exec}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${row.bg}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}