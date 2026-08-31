import { Eye, Copy, MessageCircle, MoreVertical } from "lucide-react";

interface QuotationData {
  id?: number;
  no: string;
  customer: string;
  destination?: string; // Added Destination to match the design
  amount: string;
  status: string;
}

interface RecentQuotationsProps {
  quotations?: QuotationData[];
}

export default function RecentQuotations({ quotations = [] }: RecentQuotationsProps) {
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'sent': return 'bg-purple-100 text-purple-600';
      case 'pending': return 'bg-orange-100 text-orange-600';
      case 'accepted': return 'bg-emerald-100 text-emerald-600';
      case 'draft': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Recent Quotations</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">View All</button>
      </div>
      
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-xs min-w-max">
          <thead className="text-gray-600 border-b border-gray-100">
            <tr>
              <th className="pb-3 font-medium whitespace-nowrap pr-4">Quotation No.</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Customer</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Destination</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Amount</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Status</th>
              <th className="pb-3 font-medium whitespace-nowrap pl-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {quotations.length > 0 ? (
              quotations.map((row, idx) => (
                <tr key={row.id || idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-3.5 text-gray-800 font-semibold whitespace-nowrap pr-4">{row.no}</td>
                  <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.customer}</td>
                  <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.destination || '-'}</td>
                  <td className="py-3.5 text-gray-800 font-medium whitespace-nowrap px-4">{row.amount}</td>
                  <td className="py-3.5 whitespace-nowrap px-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold capitalize ${getStatusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3.5 flex items-center gap-3 text-gray-400 whitespace-nowrap pl-4">
                    <Eye size={15} className="hover:text-blue-500 cursor-pointer transition-colors" />
                    <Copy size={15} className="hover:text-blue-500 cursor-pointer transition-colors" />
                    <MessageCircle size={15} className="hover:text-emerald-500 cursor-pointer transition-colors" />
                    <MoreVertical size={15} className="hover:text-gray-600 cursor-pointer transition-colors" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-600">No recent quotations found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}