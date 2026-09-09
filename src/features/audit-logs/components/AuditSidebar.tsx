import { ChevronRight, Download, Archive } from "lucide-react";
import Link from "next/link";

export default function AuditSidebar() {
  const topUsers = [
    { name: "Akhil", count: "456", img: "https://i.pravatar.cc/150?u=akhil" },
    { name: "Fathima Parveen", count: "386", img: "https://i.pravatar.cc/150?u=fathima" },
    { name: "Rakesh Nair", count: "312", img: "https://i.pravatar.cc/150?u=rakesh" },
    { name: "Nisha N", count: "298", img: "https://i.pravatar.cc/150?u=nisha" },
    { name: "Jithin Joseph", count: "276", img: "https://i.pravatar.cc/150?u=jithin" },
  ];

  const topModules = [
    { name: "Booking", count: "620", percent: "24.1%", width: "w-[80%]" },
    { name: "Quotation", count: "512", percent: "19.9%", width: "w-[65%]" },
    { name: "Lead", count: "410", percent: "16.0%", width: "w-[50%]" },
    { name: "Customer", count: "358", percent: "13.9%", width: "w-[45%]" },
    { name: "Hotel", count: "276", percent: "10.7%", width: "w-[35%]" },
  ];

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Activity Overview</h3>
        <div className="flex items-center gap-4">
          {/* Donut Chart */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#10b981 0% 39.9%, #3b82f6 39.9% 73.5%, #ef4444 73.5% 85.6%, #a855f7 85.6% 95.1%, #f59e0b 95.1% 100%)' }}></div>
            <div className="absolute inset-[14px] bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-xs font-black text-gray-800 leading-none">2,568</span>
              <span className="text-[8px] text-gray-500 font-bold mt-1">Total</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-1.5">
            {[
              { label: "Create", count: "1,026 (39.9%)", color: "bg-emerald-500" },
              { label: "Update", count: "864 (33.6%)", color: "bg-blue-500" },
              { label: "Delete", count: "312 (12.1%)", color: "bg-rose-500" },
              { label: "Login", count: "245 (9.5%)", color: "bg-purple-500" },
              { label: "Others", count: "121 (4.7%)", color: "bg-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                  <span className="text-[9px] font-bold text-gray-700">{item.label}</span>
                </div>
                <span className="text-[8px] font-bold text-gray-500">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Active Users */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Active Users</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View all</button>
        </div>
        <div className="space-y-3.5">
          {topUsers.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-2.5">
                <img src={user.img} alt={user.name} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{user.name}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500">{user.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Top Modules */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Modules</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View all</button>
        </div>
        <div className="space-y-4">
          {topModules.map((mod, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold text-gray-700 w-16 truncate">{mod.name}</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full bg-blue-600 rounded-full ${mod.width}`}></div>
              </div>
              <span className="text-[9px] font-medium text-gray-500 w-16 text-right">{mod.count} ({mod.percent})</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <Link href="#" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} className="text-blue-500" /> Export Logs
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <Link href="#" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Archive size={14} className="text-gray-500" /> View Archived Logs
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
        </div>
      </div>

    </>
  );
}