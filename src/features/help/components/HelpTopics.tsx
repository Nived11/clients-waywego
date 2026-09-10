import { Rocket, UserSquare2, FileText, CalendarCheck, Users, Truck, PieChart, Settings } from "lucide-react";

export default function HelpTopics() {
  const topics = [
    { title: "Getting Started", desc: "New to the system? Learn the basics and get started quickly.", count: "10 Articles", icon: Rocket, bg: "bg-blue-50", color: "text-blue-500" },
    { title: "Leads & Queries", desc: "Manage leads, queries and follow-ups effectively.", count: "12 Articles", icon: UserSquare2, bg: "bg-indigo-50", color: "text-indigo-500" },
    { title: "Quotations", desc: "Create, manage and send quotations to customers.", count: "8 Articles", icon: FileText, bg: "bg-emerald-50", color: "text-emerald-500" },
    { title: "Bookings", desc: "Manage bookings, payments and confirmations.", count: "15 Articles", icon: CalendarCheck, bg: "bg-purple-50", color: "text-purple-500" },
    { title: "Customers", desc: "Add, manage and organize your customer information.", count: "9 Articles", icon: Users, bg: "bg-amber-50", color: "text-amber-500" },
    { title: "Suppliers", desc: "Manage suppliers, rates and contracts.", count: "7 Articles", icon: Truck, bg: "bg-cyan-50", color: "text-cyan-500" },
    { title: "Reports", desc: "Understand reports and analytics.", count: "11 Articles", icon: PieChart, bg: "bg-rose-50", color: "text-rose-500" },
    { title: "Settings", desc: "Customize system settings and preferences.", count: "13 Articles", icon: Settings, bg: "bg-slate-100", color: "text-slate-600" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
      <h3 className="text-[15px] font-black text-gray-800 mb-6">Browse Help Topics</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {topics.map((topic, idx) => (
          <div 
            key={idx} 
            className="flex items-start gap-3.5 p-3.5 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${topic.bg} ${topic.color}`}>
              <topic.icon size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col h-full">
              <h4 className="text-[12px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                {topic.title}
              </h4>
              <p className="text-[10px] text-gray-500 font-medium mt-1 leading-relaxed line-clamp-2">
                {topic.desc}
              </p>
              <span className="text-[10px] font-bold text-blue-600 mt-2">
                {topic.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}