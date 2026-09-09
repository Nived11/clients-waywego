import { Users, UserCheck, ShieldCheck, Key, UserX, ArrowUp, Minus, ArrowDown } from "lucide-react";

export default function TeamStats() {
  const stats = [
    { title: "Total Users", count: "48", trend: "+ 12% vs last 30 days", color: "text-blue-600", icon: Users, bg: "bg-blue-50", trendType: "up" },
    { title: "Active Users", count: "42", trend: "+ 10% vs last 30 days", color: "text-emerald-500", icon: UserCheck, bg: "bg-emerald-50", trendType: "up" },
    { title: "User Roles", count: "7", trend: "No change vs last 30 days", color: "text-purple-600", icon: ShieldCheck, bg: "bg-purple-50", trendType: "neutral" },
    { title: "Permissions", count: "86", trend: "+ 5% vs last 30 days", color: "text-amber-500", icon: Key, bg: "bg-amber-50", trendType: "up" },
    { title: "Inactive Users", count: "6", trend: "- 14% vs last 30 days", color: "text-rose-500", icon: UserX, bg: "bg-rose-50", trendType: "down" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex flex-col gap-2 overflow-hidden">
          <div className="flex items-center gap-3.5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[11px] text-gray-500 font-bold leading-tight">{stat.title}</p>
              <p className="text-xl font-black text-gray-800 leading-none mt-1">{stat.count}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`flex items-center text-[10px] font-bold ${
              stat.trendType === 'up' ? 'text-emerald-500' : 
              stat.trendType === 'down' ? 'text-rose-500' : 'text-gray-400'
            }`}>
              {stat.trendType === 'up' && <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />}
              {stat.trendType === 'down' && <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />}
              {stat.trendType === 'neutral' && <Minus size={12} strokeWidth={3} className="mr-0.5" />}
              {stat.trend.split(' ')[0]} {stat.trend.split(' ')[1]}
            </span>
            <span className="text-[10px] font-semibold text-gray-400 truncate">
              {stat.trend.substring(stat.trend.indexOf('vs'))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}