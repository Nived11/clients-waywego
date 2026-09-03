import { SearchCode, ActivitySquare, Frown, Flag, ArrowUp, ArrowDown } from "lucide-react";

// API യിൽ നിന്നും വരുന്ന ഡാറ്റയുടെ സ്ട്രക്ച്ചർ ഡിഫൈൻ ചെയ്യുന്നു
interface KpiData {
  count: number;
  label: string;
  trend: string;
  is_positive: boolean;
}

interface QueryStatsProps {
  kpis?: {
    total_queries?: KpiData;
    new_today?: KpiData;
    unassigned?: KpiData;
    high_priority?: KpiData;
  };
}

export default function QueryStats({ kpis }: QueryStatsProps) {
  // ഓരോ കാർഡിനും ആവശ്യമായ ഐക്കണും കളറും ഇവിടെ സെറ്റ് ചെയ്യുന്നു
  const statsConfig = [
    { 
      key: "total_queries",
      fallbackTitle: "Total Queries", 
      icon: SearchCode, 
      iconColor: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      key: "new_today",
      fallbackTitle: "New Today", 
      icon: ActivitySquare, 
      iconColor: "text-teal-600", 
      bg: "bg-teal-50" 
    },
    { 
      key: "unassigned",
      fallbackTitle: "Unassigned", 
      icon: Frown, 
      iconColor: "text-orange-500", 
      bg: "bg-orange-50" 
    },
    { 
      key: "high_priority",
      fallbackTitle: "High Priority", 
      icon: Flag, 
      iconColor: "text-rose-600", 
      bg: "bg-rose-50" 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {statsConfig.map((config, idx) => {
        // API യിൽ നിന്നും ഡാറ്റ എടുക്കുന്നു, ഇല്ലെങ്കിൽ ഡീഫോൾട്ട് ഡാറ്റ കാണിക്കും
        const statData = kpis?.[config.key as keyof typeof kpis] || {
          count: 0,
          label: config.fallbackTitle,
          trend: "No data",
          is_positive: true
        };

        // ട്രെൻഡ് ടെക്സ്റ്റ് സ്പ്ലിറ്റ് ചെയ്യുന്നു (ഉദാ: "+18%" ഉം "vs last 7 days" ഉം വേർതിരിക്കാൻ)
        const trendValue = statData.trend.split(' ')[0]; // "+18%" അല്ലെങ്കിൽ "0"
        const trendDesc = statData.trend.substring(statData.trend.indexOf(' ') + 1); // ബാക്കിയുള്ള ടെക്സ്റ്റ്

        return (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 flex items-center gap-3 xl:gap-4 overflow-hidden">
            
            {/* Main Icon */}
            <div className={`w-11 h-11 xl:w-12 xl:h-12 rounded-[12px] flex items-center justify-center shrink-0 ${config.bg} ${config.iconColor}`}>
              <config.icon size={22} strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col min-w-0">
              <p className="text-[11px] xl:text-xs text-gray-500 font-medium mb-0.5 whitespace-nowrap">{statData.label}</p>
              <p className="text-xl xl:text-2xl font-bold text-gray-800 leading-none mb-1.5">{statData.count}</p>
              
              {/* Trend & Description - Dynamic Colors based on is_positive */}
              <div className="flex items-center gap-1">
                <span className={`flex items-center text-[10px] xl:text-[11px] font-bold whitespace-nowrap ${statData.is_positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {statData.is_positive ? (
                    <ArrowUp size={12} strokeWidth={3} className="mr-0.5" />
                  ) : (
                    <ArrowDown size={12} strokeWidth={3} className="mr-0.5" />
                  )}
                  {trendValue}
                </span>
                <span className="text-[10px] xl:text-[11px] font-medium text-gray-400 whitespace-nowrap truncate">
                  {trendDesc}
                </span>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}