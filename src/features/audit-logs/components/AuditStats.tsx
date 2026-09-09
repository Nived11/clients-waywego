import { FileText, PlusCircle, Edit, Trash2, Lock, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";

export default function AuditStats() {
  const stats = [
    { title: "Total Logs", count: "2,568", trend: "+ 18% vs last 7 days", color: "text-blue-600", icon: FileText, bg: "bg-blue-50", trendType: "up" },
    { title: "Create", count: "1,026", trend: "+ 16%", color: "text-emerald-500", icon: PlusCircle, bg: "bg-emerald-50", trendType: "up" },
    { title: "Update", count: "864", trend: "+ 12%", color: "text-blue-500", icon: Edit, bg: "bg-blue-50", trendType: "up" },
    { title: "Delete", count: "312", trend: "- 8%", color: "text-rose-500", icon: Trash2, bg: "bg-rose-50", trendType: "down" },
    { title: "Login", count: "245", trend: "+ 20%", color: "text-purple-500", icon: Lock, bg: "bg-purple-50", trendType: "up" },
    { title: "Others", count: "121", trend: "- 5%", color: "text-amber-500", icon: MoreHorizontal, bg: "bg-amber-50", trendType: "down" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2 overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex flex-col min-w-0">
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{stat.title}</p>
              <p className="text-lg font-black text-gray-800 leading-none mt-1.5">{stat.count}</p>
            </div>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon size={16} strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className={`flex items-center text-[9px] font-bold ${
              stat.trendType === 'up' ? 'text-emerald-500' : 'text-rose-500'
            }`}>
              {stat.trendType === 'up' ? <ArrowUp size={10} strokeWidth={3} className="mr-0.5" /> : <ArrowDown size={10} strokeWidth={3} className="mr-0.5" />}
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}