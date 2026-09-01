import { Clock, UserX, Flag, Users, Mail, Bell, Download, Upload, User, Inbox, Calendar } from "lucide-react";

// Original WhatsApp Icon
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function QuerySidebar() {
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
              <span className="text-sm font-bold text-gray-800">21</span>
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
              <span className="text-sm font-bold text-gray-800">18</span>
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
              <span className="text-sm font-bold text-gray-800">14</span>
              <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">View all</span>
            </div>
          </div>
        </div>
      </div>

      {/* Source Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-800 mb-4 text-sm">Source Breakdown</h3>
        <div className="flex items-center gap-6 mb-4">
          <div className="w-20 h-20 rounded-full relative flex items-center justify-center shrink-0" 
               style={{ background: 'conic-gradient(#2563eb 0% 32%, #10b981 32% 57%, #f59e0b 57% 75%, #8b5cf6 75% 87%, #3b82f6 87% 95%, #9ca3af 95% 100%)' }}>
            <div className="w-14 h-14 bg-white rounded-full"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span> Website</span> <span className="font-bold text-gray-800">32% <span className="text-gray-600 font-normal">(79)</span></span></div>
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> WhatsApp</span> <span className="font-bold text-gray-800">25% <span className="text-gray-600 font-normal">(62)</span></span></div>
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> Google Ads</span> <span className="font-bold text-gray-800">18% <span className="text-gray-600 font-normal">(45)</span></span></div>
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span> Referral</span> <span className="font-bold text-gray-800">12% <span className="text-gray-600 font-normal">(30)</span></span></div>
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span> Meta Ads</span> <span className="font-bold text-gray-800">8% <span className="text-gray-600 font-normal">(20)</span></span></div>
            <div className="flex justify-between text-[10px] font-medium"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></span> Others</span> <span className="font-bold text-gray-800">5% <span className="text-gray-600 font-normal">(12)</span></span></div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
          <span className="text-xs font-bold text-gray-700">Total</span>
          <span className="text-sm font-bold text-gray-800">248</span>
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
          <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex flex-shrink-0 items-center justify-center mt-0.5"><User size={18} strokeWidth={2} /></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-800">Nisha Raj <span className="text-[10px] text-gray-600 font-medium ml-1">Q-2025-0247</span></p>
              <p className="text-[11px] font-medium text-gray-600 mt-0.5">Status updated to Contacted</p>
            </div>
            <span className="text-[10px] font-medium text-gray-600 whitespace-nowrap mt-0.5">2m ago</span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-500 flex flex-shrink-0 items-center justify-center mt-0.5"><Inbox size={18} strokeWidth={2} /></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-800">Akhil K <span className="text-[10px] text-gray-600 font-medium ml-1">Q-2025-0248</span></p>
              <p className="text-[11px] font-medium text-gray-600 mt-0.5">New query assigned</p>
            </div>
            <span className="text-[10px] font-medium text-gray-600 whitespace-nowrap mt-0.5">15m ago</span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex flex-shrink-0 items-center justify-center mt-0.5"><Calendar size={18} strokeWidth={2} /></div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-800">Amal J <span className="text-[10px] text-gray-600 font-medium ml-1">Q-2025-0246</span></p>
              <p className="text-[11px] font-medium text-gray-600 mt-0.5">Follow-up added</p>
            </div>
            <span className="text-[10px] font-medium text-gray-600 whitespace-nowrap mt-0.5">32m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}