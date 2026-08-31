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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Recent Enquiries</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">View All</button>
      </div>
      
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-xs min-w-max">
          <thead className="text-gray-600 border-b border-gray-100">
            <tr>
              <th className="pb-3 font-medium whitespace-nowrap pr-4">Customer</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Destination</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Travel Date</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Source</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Assigned To</th>
              <th className="pb-3 font-medium whitespace-nowrap pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {queries.length > 0 ? queries.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="py-3.5 text-gray-800 font-semibold capitalize whitespace-nowrap pr-4">{row.customer}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.destination}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.travel_date}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.source}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.assigned_to}</td>
                <td className="py-3.5 whitespace-nowrap pl-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold capitalize ${getStatusColor(row.status)}`}>
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