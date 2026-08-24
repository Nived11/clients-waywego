export default function UpcomingDepartures() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Upcoming Departures</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      <table className="w-full text-left text-xs">
        <thead className="text-gray-400 border-b border-gray-100">
          <tr>
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 font-medium">Customer</th>
            <th className="pb-2 font-medium">Destination</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-50">
            <td className="py-3 text-gray-600">Today</td>
            <td className="py-3 text-gray-800 font-medium">Arjun P</td>
            <td className="py-3 text-gray-600">Munnar</td>
            <td className="py-3"><span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-600">Travelling</span></td>
          </tr>
          <tr>
            <td className="py-3 text-gray-600">Tomorrow</td>
            <td className="py-3 text-gray-800 font-medium">Nisha Raj</td>
            <td className="py-3 text-gray-600">Dubai</td>
            <td className="py-3"><span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-600">Confirmed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}