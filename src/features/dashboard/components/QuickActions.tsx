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
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full">
      <h3 className="font-bold text-gray-800 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {actions.map((act, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${act.bg} ${act.color} group-hover:scale-105 transition-transform`}>
              <act.icon size={20} />
            </div>
            <span className="text-[10px] text-gray-600 font-medium text-center">{act.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}