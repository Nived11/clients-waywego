import { ChevronRight, Download, Archive } from "lucide-react";
import Link from "next/link";

interface AuditSidebarProps {
  overview?: any[]; // Array from breakdown
  totalLogs?: number;
  topUsers?: any[];
  topModules?: any[];
}

export default function AuditSidebar({ overview = [], totalLogs = 0, topUsers = [], topModules = [] }: AuditSidebarProps) {
  
  // Dynamic Donut Chart Logic
  let currentPercent = 0;
  const gradientStops = overview.map(item => {
    const start = currentPercent;
    currentPercent += item.percentage;
    return `${item.color} ${start}% ${currentPercent}%`;
  }).join(', ');
  const donutBackground = gradientStops ? `conic-gradient(${gradientStops})` : 'conic-gradient(#e5e7eb 0% 100%)';

  return (
    <>
      {/* 1. Chart Section */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Activity Overview</h3>
        <div className="flex items-center gap-4">
          {/* Dynamic Donut Chart */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full transition-all duration-500" style={{ background: donutBackground }}></div>
            <div className="absolute inset-[14px] bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-xs font-black text-gray-800 leading-none">{totalLogs}</span>
              <span className="text-[8px] text-gray-600 font-bold mt-1">Total</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-1.5 max-h-[120px] overflow-y-auto">
            {overview.length > 0 ? overview.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[10px] font-bold text-gray-700">{item.name}</span>
                </div>
                <span className="text-[9px] font-bold text-gray-600">{item.count} ({item.percentage}%)</span>
              </div>
            )) : (
               <div className="text-[10px] text-gray-600">No data available</div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Top Active Users */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Active Users</h3>
        </div>
        {/* 🔥 Fixed Height Wrapper to prevent shrinking */}
        <div className="min-h-[180px] flex flex-col">
          {topUsers.length > 0 ? (
            <div className="space-y-3.5">
              {topUsers.map((user, idx) => {
                // 🔥 പേരിന്റെ ആദ്യത്തെ 2 അക്ഷരങ്ങൾ എടുക്കുന്നു 
                const userInitials = user.name ? user.name.substring(0, 2).toUpperCase() : 'U';

                return (
                  <div key={idx} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      {/* 🔥 Image മാറ്റി Initials Badge ആക്കി */}
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center text-[9px] font-bold shrink-0">
                        {userInitials}
                      </div>
                      <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{user.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500">{user.count}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <span className="text-xs text-gray-600 font-medium">No users found.</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Top Modules */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Top Modules</h3>
        </div>
        {/* 🔥 Fixed Height Wrapper for Modules too */}
        <div className="min-h-[160px] flex flex-col">
          {topModules.length > 0 ? (
            <div className="space-y-4">
              {topModules.map((mod, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold text-gray-700 w-16 truncate" title={mod.name}>{mod.name}</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${mod.percentage}%` }}></div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-800 w-16 text-right">{mod.count} ({mod.percentage}%)</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <span className="text-xs text-gray-600 font-medium">No modules found.</span>
            </div>
          )}
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
            <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-600" />
          </Link>
          <Link href="#" className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Archive size={14} className="text-gray-500" /> View Archived Logs
            </div>
            <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-600" />
          </Link>
        </div>
      </div>

    </>
  );
}