import { LucideIcon } from "lucide-react";

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
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Icon Box */}
        <div className={`p-3 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
          
          <div className="flex items-center gap-1 mt-2 text-xs font-medium">
            <span className={isPositive ? "text-emerald-500" : "text-rose-500"}>
              {isPositive ? "↑" : "↓"} {change}
            </span>
            <span className="text-gray-400 font-normal">{changeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}