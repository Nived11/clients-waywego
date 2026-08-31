import { PlusCircle, FileText, Bell, Users, Package, Hotel, Truck, Calendar } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { name: "New Enquiry", icon: PlusCircle, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Create Quotation", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "Add Follow-up", icon: Bell, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Add Customer", icon: Users, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Create Package", icon: Package, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Add Hotel Rate", icon: Hotel, color: "text-teal-600", bg: "bg-teal-50" },
    { name: "Add Supplier", icon: Truck, color: "text-indigo-600", bg: "bg-indigo-50" },
    { name: "View Calendar", icon: Calendar, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col">
      <h3 className="font-bold text-gray-800 mb-4 xl:mb-6">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-y-5 xl:gap-y-6 gap-x-1 flex-1 content-start">
        {actions.map((act, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 xl:gap-2 cursor-pointer group">
            <div className={`w-10 h-10 xl:w-12 xl:h-12 rounded-[12px] xl:rounded-[14px] flex items-center justify-center ${act.bg} ${act.color} group-hover:scale-105 transition-transform`}>
              <act.icon size={20} className="xl:w-5 xl:h-5" strokeWidth={2} />
            </div>
            {/* Added whitespace-nowrap to keep text in a single line */}
            <span className="text-[9px] xl:text-[10px] text-gray-800 font-semibold text-center leading-tight whitespace-nowrap">
              {act.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}