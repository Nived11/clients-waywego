import { Truck, CheckCircle2, Award, Clock, XCircle, ArrowUp, ArrowDown } from "lucide-react";

export default function SupplierStats() {
  const stats = [
    { title: "Total Suppliers", count: "156", trend: "+ 12% vs last 30 days", color: "text-emerald-500", icon: Truck, bg: "bg-emerald-50", isUp: true },
    { title: "Active Suppliers", count: "132", trend: "+ 8% vs last 30 days", color: "text-blue-500", icon: CheckCircle2, bg: "bg-blue-50", isUp: true },
    { title: "Preferred Suppliers", count: "48", trend: "+ 15% vs last 30 days", color: "text-purple-500", icon: Award, bg: "bg-purple-50", isUp: true },
    { title: "Pending Approval", count: "14", trend: "- 7% vs last 30 days", color: "text-amber-500", icon: Clock, bg: "bg-amber-50", isUp: false },
    { title: "Inactive Suppliers", count: "10", trend: "- 3% vs last 30 days", color: "text-rose-500", icon: XCircle, bg: "bg-rose-50", isUp: false },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex gap-3 overflow-hidden">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
            <stat.icon size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-[10px] text-gray-500 font-bold">{stat.title}</p>
            <p className="text-xl font-black text-gray-800 leading-none mt-1">{stat.count}</p>
            <p className={`flex items-center text-[9px] font-bold mt-1.5 whitespace-nowrap ${stat.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stat.isUp ? <ArrowUp size={10} strokeWidth={3} className="mr-0.5" /> : <ArrowDown size={10} strokeWidth={3} className="mr-0.5" />}
              {stat.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}