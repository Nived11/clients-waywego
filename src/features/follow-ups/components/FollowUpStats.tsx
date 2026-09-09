import { Clock, AlertCircle, CheckCircle2, Calendar, Percent, ArrowUp } from "lucide-react";

export default function FollowUpStats() {
  const stats = [
    { title: "Due Today", count: "18", trend: "+ 12% vs yesterday", color: "text-amber-500", icon: Clock, bg: "bg-amber-50" },
    { title: "Overdue", count: "7", trend: "+ 40% vs yesterday", color: "text-rose-500", icon: AlertCircle, bg: "bg-rose-50" },
    { title: "Completed Today", count: "12", trend: "+ 33% vs yesterday", color: "text-emerald-500", icon: CheckCircle2, bg: "bg-emerald-50" },
    { title: "Upcoming", count: "9", trend: "+ 15% vs yesterday", color: "text-blue-500", icon: Calendar, bg: "bg-blue-50" },
    { title: "Completion Rate", count: "40%", trend: "+ 8% vs yesterday", color: "text-purple-600", icon: Percent, bg: "bg-purple-50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex gap-3 overflow-hidden">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
            <stat.icon size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-[10px] text-gray-400 font-bold tracking-wide">{stat.title}</p>
            <p className="text-xl font-black text-gray-800 leading-none mt-1">{stat.count}</p>
            <p className="flex items-center text-[9px] font-bold text-emerald-500 mt-1.5 whitespace-nowrap">
              <ArrowUp size={10} strokeWidth={3} className="mr-0.5" />
              {stat.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}