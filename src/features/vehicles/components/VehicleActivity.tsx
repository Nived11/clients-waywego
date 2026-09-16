import { CarFront, Edit2, Trash2, Plus } from "lucide-react";

interface VehicleActivityProps {
  activities?: any[];
}

export default function VehicleActivity({ activities = [] }: VehicleActivityProps) {
  
  const getActivityIconConfig = (actionType: string) => {
    if (actionType === 'create') return { Icon: Plus, bg: 'bg-emerald-50', color: 'text-emerald-500', border: 'border-emerald-100' };
    if (actionType === 'update') return { Icon: Edit2, bg: 'bg-blue-50', color: 'text-blue-500', border: 'border-blue-100' };
    if (actionType === 'delete') return { Icon: Trash2, bg: 'bg-rose-50', color: 'text-rose-500', border: 'border-rose-100' };
    return { Icon: CarFront, bg: 'bg-gray-50', color: 'text-gray-500', border: 'border-gray-100' };
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Recent Activities</h3>
          <p className="text-xs text-gray-500 mt-0.5">Latest updates and actions performed on vehicles.</p>
        </div>
      </div>

      {activities.length === 0 ? (
        <div className="py-8 text-center text-gray-400 text-xs italic">
          No recent activities found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((act) => {
            const { Icon, bg, color, border } = getActivityIconConfig(act.action_type);
            return (
              <div key={act.id} className="flex gap-3.5 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${bg} ${color} ${border}`}>
                  <Icon size={13} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="text-xs font-bold text-gray-800 leading-tight truncate">{act.title}</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-1 leading-relaxed line-clamp-2">{act.message}</p>
                  <p className="text-[10px] text-gray-400 mt-2 font-semibold">{act.footer}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}