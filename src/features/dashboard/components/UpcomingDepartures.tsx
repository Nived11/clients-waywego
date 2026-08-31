interface DepartureData {
  id: number;
  date_label: string;
  customer: string;
  phone: string;
  destination: string;
  travel_date: string;
  status: string;
}

export default function UpcomingDepartures({ departures = [] }: { departures?: DepartureData[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Upcoming Departures</h3>
        <button className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">View All</button>
      </div>
      <div className="overflow-x-auto">
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
            {departures.length > 0 ? departures.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-600">{row.date_label === 'Tomorrow' ? 'Tomorrow' : row.travel_date}</td>
                <td className="py-3 text-gray-800 font-medium capitalize">{row.customer}</td>
                <td className="py-3 text-gray-600">{row.destination}</td>
                <td className="py-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-600">{row.status}</span>
                </td>
              </tr>
            )) : <tr><td colSpan={4} className="py-6 text-center text-gray-400">No upcoming departures</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}