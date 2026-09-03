import { Building, Building2, Map, DoorOpen, Star, ArrowUp } from "lucide-react";

export default function HotelStats() {
  const stats = [
    { title: "Total Hotels", count: "126", trend: "+12% vs last month", color: "text-purple-600", icon: Building, bg: "bg-purple-50" },
    { title: "Active Hotels", count: "112", trend: "+15% vs last month", color: "text-emerald-500", icon: Building2, bg: "bg-emerald-50" },
    { title: "Cities Covered", count: "28", trend: "+8% vs last month", color: "text-amber-500", icon: Map, bg: "bg-amber-50" },
    { title: "Total Room Types", count: "342", trend: "+10% vs last month", color: "text-blue-500", icon: DoorOpen, bg: "bg-blue-50" },
    { title: "Avg. Rating", count: "4.3/5", trend: "+0.2 vs last month", color: "text-rose-500", icon: Star, bg: "bg-rose-50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 xl:p-4 flex flex-col gap-2 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 xl:w-10 xl:h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] xl:text-[11px] text-gray-500 font-bold leading-tight">{stat.title}</p>
              <p className="text-lg xl:text-xl font-black text-gray-800 leading-none mt-1">{stat.count}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="flex items-center text-[10px] font-bold text-emerald-500">
              <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />
              {stat.trend.split(' ')[0]}
            </span>
            <span className="text-[9px] xl:text-[10px] font-semibold text-gray-400 truncate">
              {stat.trend.substring(stat.trend.indexOf(' '))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}