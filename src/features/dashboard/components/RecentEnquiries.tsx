interface QueryData {
  id: number;
  query_id: string;
  customer: string;
  phone: string;
  destination: string;
  travel_date: string;
  source: string;
  assigned_to: string;
  status: string;
}

export default function RecentEnquiries({ queries = [] }: { queries?: QueryData[] }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-600';
      case 'active': return 'bg-emerald-100 text-emerald-600';
      case 'quotation sent': return 'bg-purple-100 text-purple-600';
      case 'requirement': return 'bg-sky-100 text-sky-600';
      case 'follow-up': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

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
            {queries.length > 0 ? queries.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-800 font-medium capitalize">{row.customer}</td>
                <td className="py-3 text-gray-600">{row.destination}</td>
                <td className="py-3 text-gray-600">{row.travel_date}</td>
                <td className="py-3 text-gray-600">{row.source}</td>
                <td className="py-3 text-gray-600">{row.assigned_to}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold capitalize ${getStatusColor(row.status)}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            )) : <tr><td colSpan={6} className="py-6 text-center text-gray-400">No recent enquiries found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}