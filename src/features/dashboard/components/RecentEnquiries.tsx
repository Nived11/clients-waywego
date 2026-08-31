// 1. ഓരോ Query യുടെയും ടൈപ്പ് എന്താണെന്ന് വ്യക്തമാക്കുന്നു
interface QueryData {
  id: number;
  query_id: string;
  client_name: string;
  phone_number: string;
  status: string;
  from_date: string | null;
  to_date: string | null;
  created_at: string;
}

// 2. Component Props Interface
interface RecentEnquiriesProps {
  queries?: QueryData[];
}

export default function RecentEnquiries({ queries }: RecentEnquiriesProps) {
  // ഡാറ്റ ഇല്ലെങ്കിൽ ഒരു എംപ്റ്റി അറേ കൊടുക്കുന്നു (To prevent mapping errors)
  const safeQueries = queries || [];

  // സ്റ്റാറ്റസ് അനുസരിച്ച് കളർ കൊടുക്കാൻ ഒരു ചെറിയ ഫംഗ്ഷൻ
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-600';
      case 'active': return 'bg-emerald-100 text-emerald-600';
      case 'details_not_received': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // തിയ്യതി മാറ്റാൻ ഒരു ഫംഗ്ഷൻ (eg: 2026-09-01 -> 01 Sep 2026)
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Not Set";
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
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
              <th className="pb-2 font-medium">Phone</th>
              <th className="pb-2 font-medium">Travel Date</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {safeQueries.length > 0 ? (
              safeQueries.map((row) => (
                <tr key={row.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 text-gray-800 font-medium capitalize">{row.client_name}</td>
                  <td className="py-3 text-gray-600">{row.phone_number}</td>
                  <td className="py-3 text-gray-600">{formatDate(row.from_date)}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold capitalize ${getStatusColor(row.status)}`}>
                      {row.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-400">No recent enquiries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}