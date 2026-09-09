import { Calendar as CalendarIcon, BarChart2 } from "lucide-react";

export default function FollowUpSidebar() {
  const timeline = [
    { time: "10:30 AM", name: "Rahul Mathew", detail: "Kerala • Call", status: "Overdue", dotColor: "bg-rose-500" },
    { time: "11:00 AM", name: "Nisha Raj", detail: "Dubai • WhatsApp", status: "Due", dotColor: "bg-amber-500" },
    { time: "12:00 PM", name: "Jithin Joseph", detail: "Kashmir • Email", status: "Due", dotColor: "bg-amber-500" },
    { time: "02:00 PM", name: "Arjun P", detail: "Thailand • Call", status: "Upcoming", dotColor: "bg-blue-300" },
    { time: "03:30 PM", name: "Meera Krishnan", detail: "Bali • WhatsApp", status: "Upcoming", dotColor: "bg-blue-300" },
  ];

  const highPriority = [
    { name: "Rahul Mathew", detail: "Kerala • 10:30 AM", status: "Overdue", img: "https://i.pravatar.cc/150?u=rahul", dotColor: "bg-rose-500" },
    { name: "Jithin Joseph", detail: "Kashmir • 12:00 PM", status: "Due", img: "https://i.pravatar.cc/150?u=jithin", dotColor: "bg-amber-500" },
    { name: "Vishnu Mohan", detail: "Singapore • 04:00 PM", status: "Due", img: "https://i.pravatar.cc/150?u=vishnu", dotColor: "bg-amber-500" },
    { name: "Priya Nair", detail: "Mauritius • 05:00 PM", status: "Due", img: "https://i.pravatar.cc/150?u=priya", dotColor: "bg-amber-500" },
  ];

  return (
    <>
      {/* 1. Today's Timeline */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-bold text-gray-800">Today's Timeline</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
        </div>
        
        <div className="relative pl-14 space-y-5 before:absolute before:inset-y-2 before:left-[43px] before:w-[1px] before:bg-gray-100">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between group">
              <span className="absolute -left-14 top-0.5 text-[9px] font-bold text-gray-500 w-10 text-right">{item.time}</span>
              <div className={`absolute -left-[16px] top-1.5 w-2 h-2 rounded-full border-2 border-white ring-1 ring-gray-100 ${item.dotColor} z-10`}></div>
              
              <div>
                <p className="text-[11px] font-bold text-gray-800 leading-tight">{item.name}</p>
                <p className="text-[9px] text-gray-400 font-medium mt-0.5">{item.detail}</p>
              </div>
              
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                item.status === 'Overdue' ? 'bg-rose-50 text-rose-500' : 
                item.status === 'Due' ? 'bg-amber-50 text-amber-500' : 
                'bg-blue-50 text-blue-500'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-1.5 py-2 mt-5 border border-blue-100 text-blue-600 rounded-lg text-[11px] font-bold hover:bg-blue-50 transition-colors">
          <CalendarIcon size={13} strokeWidth={2.5} /> View Full Day Schedule
        </button>
      </div>

      {/* 2. High Priority Follow-ups */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">High Priority Follow-ups</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
        </div>
        <div className="space-y-3.5">
          {highPriority.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${user.dotColor}`}></div>
                <img src={user.img} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <p className="text-[11px] font-bold text-gray-800 leading-tight">{user.name}</p>
                  <p className="text-[9px] text-gray-400 font-medium mt-0.5">{user.detail}</p>
                </div>
              </div>
              <span className={`text-[9px] font-bold ${user.status === 'Overdue' ? 'text-rose-500' : 'text-amber-500'}`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Follow-up Performance */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold text-gray-800">Follow-up Performance</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline">View Report</button>
        </div>
        
        <div className="flex items-center gap-5 mb-4">
          {/* Donut Chart */}
          <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#10b981 0% 40%, #f59e0b 40% 70%, #ef4444 70% 85%, #cbd5e1 85% 100%)' }}></div>
            <div className="absolute inset-[10px] bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-sm font-black text-gray-800 leading-none">40%</span>
              <span className="text-[7px] text-gray-500 font-bold mt-0.5 uppercase tracking-wide">Completed</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-2">
            {[
              { label: "Completed", count: "12", color: "bg-emerald-500" },
              { label: "Due", count: "18", color: "bg-amber-500" },
              { label: "Overdue", count: "7", color: "bg-rose-500" },
              { label: "Upcoming", count: "9", color: "bg-slate-300" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                  <span className="text-[10px] font-bold text-gray-600">{item.label}</span>
                </div>
                <span className="text-[10px] font-black text-gray-800">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 flex items-start gap-2.5 mt-2">
          <BarChart2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-[10px] font-semibold text-emerald-700 leading-relaxed">
            <span className="font-black">33% more follow-ups completed</span> compared to yesterday
          </p>
        </div>
      </div>

    </>
  );
}