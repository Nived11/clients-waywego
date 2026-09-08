import { Car, CheckCircle, Wrench, XCircle, CalendarRange, ArrowUp, ArrowDown } from "lucide-react";

export default function VehicleStats() {
  const stats = [
    { title: "Total Vehicles", count: "58", trend: "+ 12% vs last month", color: "text-blue-600", icon: Car, bg: "bg-blue-50", trendType: "up" },
    { title: "Active Vehicles", count: "46", trend: "+ 15% vs last month", color: "text-emerald-500", icon: CheckCircle, bg: "bg-emerald-50", trendType: "up" },
    { title: "Under Maintenance", count: "5", trend: "- 2% vs last month", color: "text-amber-500", icon: Wrench, bg: "bg-amber-50", trendType: "down" },
    { title: "Inactive Vehicles", count: "7", trend: "- 5% vs last month", color: "text-rose-500", icon: XCircle, bg: "bg-rose-50", trendType: "down" },
    { title: "Today's Bookings", count: "18", trend: "+ 3 new bookings", color: "text-purple-600", icon: CalendarRange, bg: "bg-purple-50", trendType: "up" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[11px] text-gray-500 font-bold leading-tight">{stat.title}</p>
              <p className="text-xl font-black text-gray-800 leading-none mt-1">{stat.count}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className={`flex items-center text-[10px] font-bold ${stat.trendType === 'up' ? 'text-emerald-500' : 'text-amber-500'}`}>
              {stat.trendType === 'up' ? <ArrowUp size={12} strokeWidth={3} className="mr-0.5" /> : <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />}
              {stat.trend.split(' ')[1]}
            </span>
            <span className="text-[10px] font-semibold text-gray-400 truncate">
              {stat.trend.substring(stat.trend.indexOf(' ', 3))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}