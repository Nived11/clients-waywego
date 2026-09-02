import { Globe, Flag, Building2, Map, Archive, ArrowUp, ArrowDown } from "lucide-react";

export default function DestinationStats() {
  const stats = [
    { title: "Total Destinations", count: "48", trend: "up", percent: "8%", desc: "vs last month", color: "text-emerald-500", icon: Globe, iconColor: "text-blue-600", bg: "bg-blue-50" },
    { title: "Countries", count: "12", trend: "up", percent: "2%", desc: "vs last month", color: "text-emerald-500", icon: Flag, iconColor: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Cities", count: "36", trend: "up", percent: "12%", desc: "vs last month", color: "text-emerald-500", icon: Building2, iconColor: "text-amber-500", bg: "bg-amber-50" },
    { title: "Active Destinations", count: "44", trend: "up", percent: "10%", desc: "vs last month", color: "text-emerald-500", icon: Map, iconColor: "text-purple-600", bg: "bg-purple-50" },
    { title: "Inactive Destinations", count: "4", trend: "down", percent: "20%", desc: "vs last month", color: "text-rose-500", icon: Archive, iconColor: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 xl:p-5 flex items-center gap-3 overflow-hidden">
          
          {/* Main Icon */}
          <div className={`w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.iconColor}`}>
            <stat.icon size={22} strokeWidth={2.5} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </div>
          
          <div className="flex flex-col min-w-0 flex-1">
            {/* Title - Allowed to wrap to second line, NO truncate */}
            <p className="text-[10px] xl:text-[11px] text-gray-500 font-bold mb-0.5 leading-tight">
              {stat.title}
            </p>
            
            <p className="text-lg sm:text-xl xl:text-2xl font-black text-gray-800 leading-none mb-1.5 mt-0.5">
              {stat.count}
            </p>
            
            {/* Trend & Description - Allowed to wrap if space is too tight */}
            <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
              <span className={`flex items-center text-[10px] font-bold ${stat.color}`}>
                {stat.trend === 'up' ? (
                  <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />
                ) : (
                  <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />
                )}
                {stat.percent}
              </span>
              <span className="text-[9px] xl:text-[10px] font-semibold text-gray-400">
                {stat.desc}
              </span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}