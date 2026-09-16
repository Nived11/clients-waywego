import { Car, CheckCircle, Wrench, XCircle, CalendarRange, ArrowUp, ArrowDown } from "lucide-react";

interface VehicleStatsProps {
  cards?: any;
  loading?: boolean;
}

export default function VehicleStats({ cards, loading }: VehicleStatsProps) {
  if (loading || !cards) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-[88px]"></div>
        ))}
      </div>
    );
  }

  const statList = [
    { 
      key: "total_vehicles", 
      data: cards.total_vehicles, 
      color: "text-blue-600", 
      icon: Car, 
      bg: "bg-blue-50" 
    },
    { 
      key: "active_vehicles", 
      data: cards.active_vehicles, 
      color: "text-emerald-500", 
      icon: CheckCircle, 
      bg: "bg-emerald-50" 
    },
    { 
      key: "under_maintenance", 
      data: cards.under_maintenance, 
      color: "text-amber-500", 
      icon: Wrench, 
      bg: "bg-amber-50" 
    },
    { 
      key: "inactive_vehicles", 
      data: cards.inactive_vehicles, 
      color: "text-rose-500", 
      icon: XCircle, 
      bg: "bg-rose-50" 
    },
    { 
      key: "today_bookings", 
      data: cards.today_bookings, 
      color: "text-purple-600", 
      icon: CalendarRange, 
      bg: "bg-purple-50" 
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-4">
      {statList.map((item, idx) => {
        const info = item.data || { count: 0, label: "", trend: "0%", trend_subtext: "", is_increase: true };
        const isUp = info.is_increase;

        return (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between gap-2 overflow-hidden">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                <item.icon size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-[11px] text-gray-500 font-bold leading-tight truncate">{info.label}</p>
                <p className="text-xl font-black text-gray-800 leading-none mt-1">{info.count}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-1">
              <span className={`flex items-center text-[10px] font-bold ${isUp ? 'text-emerald-500' : 'text-amber-500'}`}>
                {isUp ? <ArrowUp size={12} strokeWidth={3} className="mr-0.5" /> : <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />}
                {info.trend}
              </span>
              <span className="text-[10px] font-semibold text-gray-400 truncate">
                {info.trend_subtext}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}