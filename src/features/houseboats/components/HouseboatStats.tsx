import { Ship, ShipWheel, Map, DoorOpen, Star, ArrowUp, Minus } from "lucide-react";

export default function HouseboatStats() {
  const stats = [
    { title: "Total Houseboats", count: "64", trend: "+14% vs last month", color: "text-purple-600", icon: Ship, bg: "bg-purple-50", trendUp: true },
    { title: "Active Houseboats", count: "56", trend: "+18% vs last month", color: "text-emerald-500", icon: ShipWheel, bg: "bg-emerald-50", trendUp: true },
    { title: "Destinations", count: "8", trend: "No change", color: "text-amber-500", icon: Map, bg: "bg-amber-50", trendUp: null },
    { title: "Total Rooms", count: "312", trend: "+9% vs last month", color: "text-blue-500", icon: DoorOpen, bg: "bg-blue-50", trendUp: true },
    { title: "Avg. Rating", count: "4.6/5", trend: "+0.1 vs last month", color: "text-rose-500", icon: Star, bg: "bg-rose-50", trendUp: true },
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
            {stat.trendUp === true && (
              <span className="flex items-center text-[10px] font-bold text-emerald-500">
                <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />
                {stat.trend.split(' ')[0]}
              </span>
            )}
            {stat.trendUp === null && (
              <span className="flex items-center text-[10px] font-bold text-gray-400">
                <Minus size={12} strokeWidth={3} className="mr-0.5" />
              </span>
            )}
            <span className="text-[9px] xl:text-[10px] font-semibold text-gray-400 truncate">
              {stat.trendUp === true ? stat.trend.substring(stat.trend.indexOf(' ')) : stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}