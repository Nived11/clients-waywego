import { Edit2 } from "lucide-react";

export default function RoleManagement() {
  const roles = [
    { name: "Super Admin", users: 1, perms: "All Permissions", color: "bg-emerald-50 text-emerald-600" },
    { name: "Admin", users: 5, perms: "72 Permissions", color: "bg-blue-50 text-blue-600" },
    { name: "Manager", users: 6, perms: "48 Permissions", color: "bg-gray-100 text-gray-700" },
    { name: "Sales Executive", users: 20, perms: "24 Permissions", color: "bg-blue-50 text-blue-600" },
    { name: "Support Executive", users: 10, perms: "20 Permissions", color: "bg-orange-50 text-orange-600" },
    { name: "Accountant", users: 6, perms: "15 Permissions", color: "bg-purple-50 text-purple-600" },
    { name: "Total", users: 48, perms: "86 Permissions", color: "bg-gray-100 text-gray-700", isTotal: true },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-gray-800">Role Management</h3>
          <p className="text-[10px] text-gray-500 font-medium mt-0.5">Manage user roles and their permissions.</p>
        </div>
        <button className="text-[11px] font-bold text-blue-600 hover:text-blue-800">View All Roles</button>
      </div>
      
      <div className="overflow-x-auto w-full p-4">
        <table className="w-full text-left text-[11px]">
          <thead className="text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="py-2.5 px-2">Role Name</th>
              <th className="py-2.5 px-2 text-center">Users</th>
              <th className="py-2.5 px-2">Permissions</th>
              <th className="py-2.5 px-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {roles.map((row, idx) => (
              <tr key={idx} className={`${row.isTotal ? 'font-bold bg-gray-50/50' : 'hover:bg-gray-50/80 transition-colors'}`}>
                <td className="py-3 px-2 font-bold text-gray-800">{row.name}</td>
                <td className="py-3 px-2 text-center font-bold text-gray-700">{row.users}</td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${row.color}`}>
                    {row.perms}
                  </span>
                </td>
                <td className="py-3 px-2 text-center">
                  {!row.isTotal && (
                    <button className="w-6 h-6 inline-flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                      <Edit2 size={10} strokeWidth={2.5} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}