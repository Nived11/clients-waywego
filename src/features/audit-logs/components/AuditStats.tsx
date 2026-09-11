import { FileText, PlusCircle, Edit, Trash2, Lock, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";

interface KpiData {
  count: number | string;
  label: string;
  trend: string;
  is_positive: boolean;
}

interface AuditStatsProps {
  stats?: {
    total_logs?: KpiData;
    create?: KpiData;
    update?: KpiData;
    delete?: KpiData;
    login?: KpiData;
    others?: KpiData;
  };
  loading?: boolean;
}

export default function AuditStats({ stats, loading }: AuditStatsProps) {
  const statsConfig = [
    { key: "total_logs", fallbackTitle: "Total Logs", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { key: "create", fallbackTitle: "Create", icon: PlusCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
    { key: "update", fallbackTitle: "Update", icon: Edit, color: "text-blue-500", bg: "bg-blue-50" },
    { key: "delete", fallbackTitle: "Delete", icon: Trash2, color: "text-rose-500", bg: "bg-rose-50" },
    { key: "login", fallbackTitle: "Login", icon: Lock, color: "text-purple-500", bg: "bg-purple-50" },
    { key: "others", fallbackTitle: "Others", icon: MoreHorizontal, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 xl:gap-3">
      {statsConfig.map((config, idx) => {
        const statData = stats?.[config.key as keyof typeof stats] || {
          count: 0,
          label: config.fallbackTitle,
          trend: "No data",
          is_positive: true
        };

        const rawTrend = statData.trend || "";
        const cleanTrend = rawTrend.replace(/[↑↓]/g, '').trim();

        return (
          // 🔥 FIX: Padding (p-3.5), Gap (gap-2.5) എന്നിവ കുറച്ചു.
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3.5 flex items-center gap-2.5 overflow-hidden">
            
            {/* 1. Icon on the LEFT - 🔥 Size reduced (w-9 h-9) */}
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${config.bg} ${config.color}`}>
              <config.icon size={18} strokeWidth={2.5} />
            </div>
            
            {/* 2. Text Content on the RIGHT */}
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] xl:text-[11px] text-gray-500 font-bold mb-0.5 whitespace-nowrap truncate">
                {statData.label}
              </p>
              
              <p className="text-lg xl:text-xl font-black text-[#1e3a5f] leading-none mb-1.5">
                {loading ? "..." : statData.count}
              </p>
              
              {/* Trend */}
              <div className="flex items-center">
                <span className={`flex items-center text-[9px] xl:text-[10px] font-bold whitespace-nowrap ${
                  statData.is_positive ? 'text-emerald-500' : 'text-rose-500'
                }`}>
                  {statData.is_positive ? (
                    <ArrowUp size={10} strokeWidth={3} className="mr-0.5 shrink-0" />
                  ) : (
                    <ArrowDown size={10} strokeWidth={3} className="mr-0.5 shrink-0" />
                  )}
                  {cleanTrend.includes('vs') ? (
                    <>
                      {cleanTrend.split('vs')[0]} 
                      <span className="text-gray-400 font-medium ml-0.5">vs {cleanTrend.split('vs')[1]}</span>
                    </>
                  ) : (
                    cleanTrend
                  )}
                </span>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
} 