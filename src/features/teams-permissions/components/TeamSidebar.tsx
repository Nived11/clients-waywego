import { ChevronRight, UserPlus, ShieldPlus, Settings, FileText, UploadCloud, Download, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";

export default function TeamSidebar() {
  const activeSessions = [
    { name: "Akhil", device: "Windows - Kochi, India", time: "This Device", active: true, icon: Monitor },
    { name: "Rakesh Nair", device: "MacOS - Kochi, India", time: "10:30 AM", active: false, icon: Monitor },
    { name: "Fathima Parveen", device: "Android - Calicut, India", time: "09:15 AM", active: false, icon: Smartphone, isRed: true },
    { name: "Jithin Joseph", device: "Windows - Trivandrum, India", time: "08:45 AM", active: false, icon: Monitor, isGreen: true },
  ];

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Role Distribution</h3>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-between w-full">
            {/* Donut Chart */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#8b5cf6 0% 2.1%, #3b82f6 2.1% 12.5%, #10b981 12.5% 25%, #f59e0b 25% 66.7%, #ef4444 66.7% 87.5%, #6366f1 87.5% 100%)' }}></div>
              <div className="absolute inset-3 bg-white rounded-full flex flex-col items-center justify-center">
                <span className="text-sm font-black text-gray-800 leading-none">48</span>
                <span className="text-[8px] text-gray-500 font-bold mt-0.5">Total</span>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex-1 pl-4 space-y-2">
              {[
                { label: "Super Admin", count: "1 (2.1%)", color: "bg-purple-500" },
                { label: "Admin", count: "5 (10.4%)", color: "bg-blue-500" },
                { label: "Manager", count: "6 (12.5%)", color: "bg-emerald-500" },
                { label: "Sales Executive", count: "20 (41.7%)", color: "bg-amber-500" },
                { label: "Support Executive", count: "10 (20.8%)", color: "bg-rose-500" },
                { label: "Accountant", count: "6 (12.5%)", color: "bg-indigo-500" },
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
          <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors w-full text-left mt-1">
            View all roles
          </button>
        </div>
      </div>

      {/* 2. Active Sessions - Moved to bottom as per your code structure */}

      {/* 3. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          {/* 🔥 LINK UPDATED HERE */}
          <Link href="/teams-permissions/add" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <UserPlus size={14} className="text-blue-500" /> Add New User
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <ShieldPlus size={14} className="text-purple-500" /> Create New Role
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Settings size={14} className="text-gray-500" /> Permission Manager
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <FileText size={14} className="text-blue-400" /> User Activity Report
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <UploadCloud size={14} className="text-amber-500" /> Bulk Import Users
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} className="text-emerald-500" /> Export Users
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Active Sessions</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {activeSessions.map((session, idx) => (
            <div key={idx} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${session.isRed ? 'bg-rose-50 text-rose-500' : session.isGreen ? 'bg-emerald-50 text-emerald-500' : 'bg-blue-50 text-blue-500'}`}>
                  <session.icon size={14} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-800 leading-tight">{session.name}</p>
                  <p className="text-[9px] text-gray-500 font-medium mt-0.5">{session.device}</p>
                </div>
              </div>
              {session.active ? (
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded text-[9px] font-bold">
                  {session.time}
                </span>
              ) : (
                <span className="text-[9px] font-bold text-gray-400">{session.time}</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </>
  );
}