"use client";

import { Edit2, Plus, Trash2, Lock, Minus, Cloud, MoreVertical, ChevronDown } from "lucide-react";

export default function AuditTable() {
  const logs = [
    { time: "26 May 2025, 10:35:42 AM", user: "Akhil", role: "Super Admin", action: "Updated", actionType: "update", module: "Booking", record: "BK-2025-0456", details: "Updated booking status from Confirmed to Completed", ip: "182.68.12.10", img: "https://i.pravatar.cc/150?u=akhil" },
    { time: "26 May 2025, 10:22:18 AM", user: "Fathima Parveen", role: "Manager", action: "Created", actionType: "create", module: "Quotation", record: "QT-2025-0897", details: "Created new quotation for Rahul Mathew", ip: "182.68.12.11", img: "https://i.pravatar.cc/150?u=fathima" },
    { time: "26 May 2025, 10:15:09 AM", user: "Rakesh Nair", role: "Admin", action: "Deleted", actionType: "delete", module: "Lead", record: "Lead #L-2025-2891", details: "Deleted lead: Arjun P", ip: "182.68.12.12", img: "https://i.pravatar.cc/150?u=rakesh" },
    { time: "26 May 2025, 09:58:33 AM", user: "Nisha N", role: "Sales Executive", action: "Updated", actionType: "update", module: "Customer", record: "CUS-001245", details: "Updated customer information for Meera Krishnan", ip: "182.68.12.13", img: "https://i.pravatar.cc/150?u=nisha" },
    { time: "26 May 2025, 09:41:27 AM", user: "Jithin Joseph", role: "Sales Executive", action: "Created", actionType: "create", module: "Booking", record: "BK-2025-0455", details: "New booking created for Mountain Stay", ip: "182.68.12.14", img: "https://i.pravatar.cc/150?u=jithin" },
    { time: "26 May 2025, 09:30:11 AM", user: "Vishnu Mohan", role: "Support Executive", action: "Updated", actionType: "update", module: "Supplier", record: "SUP-00078", details: "Updated supplier details for Kerala Tourism Services", ip: "182.68.12.15", img: "https://i.pravatar.cc/150?u=vishnu" },
    { time: "26 May 2025, 09:12:05 AM", user: "Meera Krishnan", role: "Sales Executive", action: "Login", actionType: "login", module: "System", record: "-", details: "User logged in to the system", ip: "182.68.12.16", img: "https://i.pravatar.cc/150?u=meera" },
    { time: "26 May 2025, 09:05:47 AM", user: "Arjun P", role: "Accountant", action: "Exported", actionType: "export", module: "Report", record: "Sales Report", details: "Exported Sales Report (May 20 - May 26, 2025)", ip: "182.68.12.17", img: "https://i.pravatar.cc/150?u=arjun" },
    { time: "26 May 2025, 08:47:22 AM", user: "Fathima Parveen", role: "Manager", action: "Updated", actionType: "update", module: "Hotel", record: "HOT-00056", details: "Updated hotel information for Green Palace", ip: "182.68.12.18", img: "https://i.pravatar.cc/150?u=fathima" },
    { time: "26 May 2025, 08:30:14 AM", user: "System", role: "System", action: "Backup", actionType: "backup", module: "System", record: "-", details: "Database backup completed (Scheduled)", ip: "182.68.12.19", img: "https://i.pravatar.cc/150?u=system" },
  ];

  const getActionBadge = (type: string, action: string) => {
    switch (type) {
      case 'update': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold"><Edit2 size={10} strokeWidth={3}/> {action}</span>;
      case 'create': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold"><Plus size={10} strokeWidth={3}/> {action}</span>;
      case 'delete': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-500 rounded text-[10px] font-bold"><Trash2 size={10} strokeWidth={3}/> {action}</span>;
      case 'login': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[10px] font-bold"><Lock size={10} strokeWidth={3}/> {action}</span>;
      case 'export': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-600 rounded text-[10px] font-bold"><Minus size={10} strokeWidth={3}/> {action}</span>;
      case 'backup': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-cyan-50 text-cyan-600 rounded text-[10px] font-bold"><Cloud size={10} strokeWidth={3}/> {action}</span>;
      default: return <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold">{action}</span>;
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left text-[11px] min-w-[1150px]">
          <thead className="bg-white text-gray-800 font-black border-b border-gray-100">
            <tr>
              <th className="py-4 px-4 whitespace-nowrap min-w-[180px]">Time</th>
              <th className="py-4 px-4 min-w-[160px]">User</th>
              <th className="py-4 px-4 min-w-[100px]">Action</th>
              <th className="py-4 px-4 min-w-[100px]">Module</th>
              <th className="py-4 px-4 min-w-[120px]">Record</th>
              <th className="py-4 px-4 w-[280px]">Details</th>
              <th className="py-4 px-4 min-w-[110px]">IP Address</th>
              <th className="py-4 px-4 w-[50px] text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {logs.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-gray-600 whitespace-nowrap">{row.time}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2.5">
                    <img src={row.img} alt={row.user} className="w-7 h-7 rounded-full object-cover shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800 text-[11px] whitespace-nowrap">{row.user}</p>
                      <p className="text-[9px] text-gray-500 font-medium whitespace-nowrap">{row.role}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">{getActionBadge(row.actionType, row.action)}</td>
                <td className="py-3 px-4 font-bold text-gray-700">{row.module}</td>
                <td className="py-3 px-4 font-semibold text-blue-600 hover:underline cursor-pointer">{row.record}</td>
                <td className="py-3 px-4 text-gray-600 pr-8">{row.details}</td>
                <td className="py-3 px-4 font-medium text-gray-600">{row.ip}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors"><MoreVertical size={14}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-500 bg-white">
        <div className="w-full sm:w-1/3 text-left">
          <p>Showing 1 to 10 of 2,568 logs</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-0.5">...</span>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">257</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1.5 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700 font-bold">10 / page</span>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}