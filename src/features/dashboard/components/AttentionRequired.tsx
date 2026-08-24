import { UserX, UserMinus, FileWarning, CheckSquare, ChevronRight } from "lucide-react";

export default function AttentionRequired() {
  const items = [
    { count: 7, label: "Overdue Follow-ups", icon: UserX, color: "text-rose-500", bg: "bg-rose-50" },
    { count: 4, label: "Enquiries Not Assigned", icon: UserMinus, color: "text-orange-500", bg: "bg-orange-50" },
    { count: 6, label: "Quotations Need Follow-up", icon: FileWarning, color: "text-yellow-500", bg: "bg-yellow-50" },
    { count: 2, label: "Approvals Pending", icon: CheckSquare, color: "text-blue-500", bg: "bg-blue-50" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <h3 className="font-bold text-gray-800 mb-4">Attention Required</h3>
      <div className="flex flex-col gap-1 flex-1 justify-between">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800 leading-none">{item.count}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}