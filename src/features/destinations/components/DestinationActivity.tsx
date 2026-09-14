import { Plus, Edit2, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DestinationActivity({ activities = [] }: { activities?: any[] }) {
  
  // Icon and Color Mapper based on API response
  const getIconConfig = (actionType: string) => {
    if (actionType === 'create') return { Icon: Plus, bg: 'bg-emerald-50', color: 'text-emerald-500' };
    if (actionType === 'update') return { Icon: Edit2, bg: 'bg-blue-50', color: 'text-blue-500' };
    if (actionType === 'delete') return { Icon: Trash2, bg: 'bg-rose-50', color: 'text-rose-500' };
    return { Icon: Plus, bg: 'bg-gray-50', color: 'text-gray-500' };
  };

  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
      
      {/* 🔥 Header with View All Button */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-800 text-sm">Recent Activity</h3>
        <Link href="#" className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1">
          View All Activity <ArrowRight size={12} strokeWidth={2.5} />
        </Link>
      </div>
      
      {/* 🔥 Grid updated to show 4 columns (md:grid-cols-2, xl:grid-cols-4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* 🔥 .slice(0, 4) ആക്കി മാറ്റി (4 ഐറ്റങ്ങൾ കാണിക്കാൻ) */}
        {activities.slice(0, 4).map((activity, idx) => {
          const { Icon, bg, color } = getIconConfig(activity.action_type);
          
          return (
            <div key={idx} className="flex gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${bg}`}>
                <Icon size={14} className={color} strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">{activity.title}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-1 line-clamp-1" title={activity.message}>{activity.message}</p>
                <p className="text-[10px] text-gray-400 mt-1">{activity.footer}</p>
              </div>
            </div>
          );
        })}

        {activities.length === 0 && (
          <p className="text-xs text-gray-400 font-medium italic col-span-full">No recent activities found.</p>
        )}
      </div>
    </div>
  );
}