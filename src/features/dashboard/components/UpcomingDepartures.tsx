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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">Upcoming Departures</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">View All</button>
      </div>
      
      {/* Scrollbar removed by compressing table paddings */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-xs min-w-max xl:min-w-0">
          <thead className="text-gray-600 border-b border-gray-100">
            <tr>
              <th className="pb-3 font-medium whitespace-nowrap pr-2">Date</th>
              <th className="pb-3 font-medium whitespace-nowrap px-2">Customer</th>
              <th className="pb-3 font-medium whitespace-nowrap px-2">Destination</th>
              <th className="pb-3 font-medium whitespace-nowrap px-2">Travel Date</th>
              <th className="pb-3 font-medium whitespace-nowrap pl-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {departures.length > 0 ? departures.slice(0, 5).map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="py-3.5 text-gray-800 font-semibold whitespace-nowrap pr-2">{row.date_label}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-2">{row.customer}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-2">{row.destination}</td>
                <td className="py-3.5 text-gray-600 whitespace-nowrap px-2">{row.travel_date}</td>
                <td className="py-3.5 whitespace-nowrap pl-2">
                  <span className="px-2 py-1 rounded-md text-[9px] xl:text-[10px] font-bold bg-emerald-100 text-emerald-600">
                    {row.status}
                  </span>
                </td>
              </tr>
            )) : <tr><td colSpan={5} className="py-6 text-center text-gray-400">No upcoming departures</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}