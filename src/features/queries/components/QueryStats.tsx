import { SearchCode, ActivitySquare, Frown, Flag, ArrowUp, ArrowDown } from "lucide-react";

export default function QueryStats() {
  const stats = [
    { title: "Total Queries", count: "248", trend: "up", percent: "18%", desc: "vs last 7 days", color: "text-emerald-500", icon: SearchCode, iconColor: "text-blue-600", bg: "bg-blue-50" },
    { title: "New Today", count: "32", trend: "up", percent: "22%", desc: "vs yesterday", color: "text-emerald-500", icon: ActivitySquare, iconColor: "text-teal-600", bg: "bg-teal-50" },
    { title: "Unassigned", count: "18", trend: "down", percent: "12%", desc: "vs yesterday", color: "text-rose-500", icon: Frown, iconColor: "text-orange-500", bg: "bg-orange-50" },
    { title: "High Priority", count: "14", trend: "down", percent: "7%", desc: "vs yesterday", color: "text-rose-500", icon: Flag, iconColor: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex items-center gap-3 xl:gap-4 overflow-hidden">
          
          {/* Main Icon - Original size but bolder stroke (2.5) */}
          <div className={`w-11 h-11 xl:w-12 xl:h-12 rounded-[12px] flex items-center justify-center shrink-0 ${stat.bg} ${stat.iconColor}`}>
            <stat.icon size={22} strokeWidth={2.5} />
          </div>
          
          <div className="flex flex-col min-w-0">
            <p className="text-[11px] xl:text-xs text-gray-500 font-medium mb-0.5 whitespace-nowrap">{stat.title}</p>
            <p className="text-xl xl:text-2xl font-bold text-gray-800 leading-none mb-1.5">{stat.count}</p>
            
            {/* Trend & Description - Prevented wrapping with whitespace-nowrap */}
            <div className="flex items-center gap-1">
              <span className={`flex items-center text-[10px] xl:text-[11px] font-bold ${stat.color} whitespace-nowrap`}>
                {stat.trend === 'up' ? (
                  <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />
                ) : (
                  <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />
                )}
                {stat.percent}
              </span>
              <span className="text-[10px] xl:text-[11px] font-medium text-gray-400 whitespace-nowrap truncate">{stat.desc}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}