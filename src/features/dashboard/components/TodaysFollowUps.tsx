import { Phone, MessageCircle, ExternalLink, MoreVertical } from "lucide-react";

interface FollowUpData {
  id: number;
  customer: string;
  phone: string;
  destination: string;
  executive: string;
  time: string;
  status: string;
}

export default function TodaysFollowUps({ followups = [] }: { followups?: FollowUpData[] }) {
  const getStatusColor = (status: string) => {
    return status.toLowerCase() === 'due' ? 'bg-rose-100 text-rose-600' : 'bg-orange-100 text-orange-600';
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Today's Follow-ups</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">View All</button>
      </div>
      
      {/* overflow-x-auto and custom scrollbar styles can be applied here */}
      <div className="overflow-x-auto flex-1">
        {/* Added min-w-max to prevent squishing */}
        <table className="w-full text-left text-xs min-w-max">
          <thead className="text-gray-400 border-b border-gray-100">
            <tr>
              <th className="pb-3 font-medium whitespace-nowrap pr-4">Customer</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Destination</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Executive</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Time</th>
              <th className="pb-3 font-medium whitespace-nowrap px-4">Status</th>
              <th className="pb-3 font-medium whitespace-nowrap pl-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {followups.length > 0 ? followups.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                {/* Added whitespace-nowrap and padding to all cells */}
                <td className="py-3.5 text-gray-800 font-semibold capitalize whitespace-nowrap pr-4">{row.customer}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.destination}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-4">{row.executive}</td>
                <td className="py-3.5 text-gray-800 font-medium whitespace-nowrap px-4">{row.time}</td>
                <td className="py-3.5 whitespace-nowrap px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusColor(row.status)}`}>{row.status}</span>
                </td>
                <td className="py-3.5 flex items-center gap-3 text-gray-400 whitespace-nowrap pl-4">
                  <Phone size={15} className="hover:text-emerald-500 cursor-pointer transition-colors" />
                  <MessageCircle size={15} className="hover:text-emerald-500 cursor-pointer transition-colors" />
                  <ExternalLink size={15} className="hover:text-blue-500 cursor-pointer transition-colors" />
                </td>
              </tr>
            )) : <tr><td colSpan={6} className="py-6 text-center text-gray-400">No follow-ups for today</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}