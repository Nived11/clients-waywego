import { Clock, UserX, Flag, Users, Mail, Bell, Download, Upload, User, Inbox, Calendar } from "lucide-react";

// API ഡാറ്റയുടെ സ്ട്രക്ച്ചർ (Types)
interface SourceData {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface ActivityData {
  id: number;
  user_name: string;
  user_initials: string;
  query_id: string;
  action: string;
  time_ago: string;
}

interface QuerySidebarProps {
  stageCounts?: any;
  sources?: SourceData[];
  activities?: ActivityData[];
  insights?: {
    overdue_followups: number;
    unassigned_queries: number;
    high_priority_queries: number;
  };
}

// Original WhatsApp Icon
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function QuerySidebar({ stageCounts, sources = [], activities = [], insights }: QuerySidebarProps) {
  
  // ഡൈനാമിക് ആയി ഡോനട്ട് ചാർട്ടിന്റെ ഗ്രേഡിയന്റ് കാൽക്കുലേറ്റ് ചെയ്യുന്നു
  let currentPercent = 0;
  const gradientStops = sources.map(source => {
    const start = currentPercent;
    currentPercent += source.percentage;
    return `${source.color} ${start}% ${currentPercent}%`;
  }).join(', ');
  const donutBackground = gradientStops ? `conic-gradient(${gradientStops})` : 'conic-gradient(#e5e7eb 0% 100%)';

  const totalQueries = stageCounts?.all || 0;

  return (
    <div className="flex flex-col gap-6">
      
      {/* Query Insights */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-800 mb-4 text-sm">Query Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-rose-500" strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-medium">Overdue Follow-ups</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-800">{insights?.overdue_followups || 0}</span>
              <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">View all</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                <UserX size={16} className="text-orange-500" strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-medium">Unassigned Queries</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-800">{insights?.unassigned_queries || 0}</span>
              <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">View all</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                <Flag size={16} className="text-rose-600" strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-medium">High Priority Queries</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-800">{insights?.high_priority_queries || 0}</span>
              <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">View all</span>
            </div>
          </div>
        </div>
      </div>

      {/* Source Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-800 mb-4 text-sm">Source Breakdown</h3>
        <div className="flex items-center gap-6 mb-4">
          {/* Dynamic Donut Chart */}
          <div 
            className="w-20 h-20 rounded-full relative flex items-center justify-center shrink-0 transition-all duration-500" 
            style={{ background: donutBackground }}
          >
            <div className="w-14 h-14 bg-white rounded-full"></div>
          </div>
          
          <div className="flex-1 space-y-2 max-h-[140px] overflow-y-auto pr-1">
            {sources.length > 0 ? sources.map((source, idx) => (
              <div key={idx} className="flex justify-between text-[10px] font-medium">
                <span className="flex items-center gap-1.5 truncate pr-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: source.color }}></span> 
                  <span className="truncate">{source.name}</span>
                </span> 
                <span className="font-bold text-gray-800 shrink-0">
                  {source.percentage}% <span className="text-gray-600 font-normal">({source.count})</span>
                </span>
              </div>
            )) : (
              <div className="text-[11px] text-gray-400">No source data available</div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
          <span className="text-xs font-bold text-gray-700">Total</span>
          <span className="text-sm font-bold text-gray-800">{totalQueries}</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-800 mb-4 text-sm">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Bulk Assign", icon: Users, c: "text-slate-700" },
            { name: "Send WhatsApp", icon: WhatsAppIcon, c: "text-[#25D366]" },
            { name: "Send Email", icon: Mail, c: "text-blue-600" },
            { name: "Add Follow-up", icon: Bell, c: "text-purple-600" },
            { name: "Export Queries", icon: Download, c: "text-emerald-500" },
            { name: "Import Queries", icon: Upload, c: "text-blue-600" },
          ].map((act, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer gap-2 transition-colors">
              <act.icon size={18} className={act.c} strokeWidth={1.5} />
              <span className="text-[9px] text-gray-600 font-medium text-center leading-tight">{act.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-gray-800 text-sm">Recent Activity</h3>
          <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">View all</span>
        </div>
        <div className="space-y-5">
          {/* ഇവിടെ .slice(0, 3) എന്ന് നൽകി 3 എണ്ണമായി ചുരുക്കി */}
          {activities.length > 0 ? activities.slice(0, 3).map((act, idx) => {
            const colors = ["bg-blue-50 text-blue-600", "bg-emerald-50 text-emerald-600", "bg-purple-50 text-purple-600", "bg-orange-50 text-orange-500", "bg-pink-50 text-pink-500"];
            const colorClass = colors[idx % colors.length];

            return (
              <div key={act.id} className="flex gap-3 items-start">
                <div className={`w-9 h-9 rounded-xl ${colorClass} flex flex-shrink-0 items-center justify-center mt-0.5 font-bold text-xs shadow-sm`}>
                  {act.user_initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-800 truncate">
                    {act.user_name} <span className="text-[10px] text-gray-500 font-medium ml-1">{act.query_id}</span>
                  </p>
                  <p className="text-[11px] font-medium text-gray-600 mt-0.5 line-clamp-2 whitespace-pre-wrap">{act.action}</p>
                </div>
                <span className="text-[9px] font-bold text-gray-500 whitespace-nowrap mt-0.5">{act.time_ago}</span>
              </div>
            );
          }) : (
            <p className="text-xs text-gray-400 text-center py-4">No recent activities found.</p>
          )}
        </div>
      </div>
      
    </div>
  );
}