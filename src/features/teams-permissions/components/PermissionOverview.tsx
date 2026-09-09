export default function PermissionOverview() {
  const modules = [
    { name: "Dashboard", perms: 6, assigned: "7 Roles", progress: 20 },
    { name: "Leads & Queries", perms: 12, assigned: "6 Roles", progress: 50 },
    { name: "Quotations", perms: 10, assigned: "6 Roles", progress: 40 },
    { name: "Bookings", perms: 12, assigned: "7 Roles", progress: 50 },
    { name: "Customers", perms: 8, assigned: "5 Roles", progress: 30 },
    { name: "Reports", perms: 14, assigned: "6 Roles", progress: 60 },
    { name: "Settings", perms: 12, assigned: "5 Roles", progress: 50 },
    { name: "Total", perms: 86, assigned: "-", progress: 0, isTotal: true },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-gray-800">Permissions Overview</h3>
          <p className="text-[10px] text-gray-500 font-medium mt-0.5">System permissions by module.</p>
        </div>
        <button className="text-[11px] font-bold text-blue-600 hover:text-blue-800">View All Permissions</button>
      </div>
      
      <div className="overflow-x-auto w-full p-4">
        <table className="w-full text-left text-[11px]">
          <thead className="text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="py-2.5 px-2">Module</th>
              <th className="py-2.5 px-2">Permissions</th>
              <th className="py-2.5 px-2">Assigned</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {modules.map((row, idx) => (
              <tr key={idx} className={`${row.isTotal ? 'font-bold bg-gray-50/50' : 'hover:bg-gray-50/80 transition-colors'}`}>
                <td className="py-3 px-2 font-bold text-gray-800">{row.name}</td>
                <td className="py-3 px-2 flex items-center gap-3">
                  <span className="font-bold text-gray-700 w-4">{row.perms}</span>
                  {!row.isTotal && (
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${row.progress}%` }}></div>
                    </div>
                  )}
                </td>
                <td className="py-3 px-2 font-semibold text-gray-600">{row.assigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}