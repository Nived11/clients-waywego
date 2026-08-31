import { LucideIcon, ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeText: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function StatCard({ 
  title, value, change, changeText, isPositive, icon: Icon, iconColor, iconBg 
}: StatCardProps) {
  return (
    <div className="bg-white p-3 xl:p-4 2xl:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2.5 xl:gap-3 2xl:gap-4 overflow-hidden">
      
      {/* Icon Box - (ചെറിയ സ്ക്രീനിൽ ഐക്കണും പാഡിങ്ങും ചെറുതാകും) */}
      <div className={`shrink-0 p-2 xl:p-2.5 2xl:p-3 rounded-[14px] flex items-center justify-center ${iconBg} ${iconColor}`}>
        <Icon strokeWidth={2} className="w-5 h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        {/* Title - Truncate ഒഴിവാക്കി, പകരം ടെക്സ്റ്റ് സൈസ് ഡൈനാമിക് ആക്കി, ഒപ്പം tracking-tight കൊടുത്തു */}
        <p className="text-gray-500 text-[10px] xl:text-[11px] 2xl:text-[13px] font-bold whitespace-nowrap tracking-tight">
          {title}
        </p>
        
        {/* Value */}
        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-extrabold text-gray-800 leading-none mt-1 2xl:mt-1.5">
          {value}
        </h3>
        
        {/* Change Indicator */}
        <div className="flex items-center gap-1 mt-1.5 2xl:mt-2 text-[9px] xl:text-[10px] 2xl:text-xs whitespace-nowrap tracking-tight">
          <span className={`flex items-center font-bold ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            {/* Bold Arrows */}
            {isPositive ? (
              <ArrowUp strokeWidth={3} className="mr-[2px] w-3 h-3 2xl:w-3.5 2xl:h-3.5" />
            ) : (
              <ArrowDown strokeWidth={3} className="mr-[2px] w-3 h-3 2xl:w-3.5 2xl:h-3.5" />
            )}
            {change}
          </span>
          <span className="text-gray-400 font-medium">{changeText}</span>
        </div>
      </div>

    </div>
  );
}