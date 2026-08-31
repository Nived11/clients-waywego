import { UserX, UserMinus, FileWarning, CheckSquare, ChevronRight } from "lucide-react";

interface AttentionProps {
  data?: {
    overdue_followups: number;
    enquiries_not_assigned: number;
    quotations_need_followup: number;
    approvals_pending: number;
  };
}

export default function AttentionRequired({ data }: AttentionProps) {
  const items = [
    { count: data?.overdue_followups || 0, label: "Overdue Follow-ups", icon: UserX, color: "text-rose-500", bg: "bg-rose-50" },
    { count: data?.enquiries_not_assigned || 0, label: "Enquiries Not Assigned", icon: UserMinus, color: "text-orange-500", bg: "bg-orange-50" },
    { count: data?.quotations_need_followup || 0, label: "Quotations Need Follow-up", icon: FileWarning, color: "text-yellow-500", bg: "bg-yellow-50" },
    { count: data?.approvals_pending || 0, label: "Approvals Pending", icon: CheckSquare, color: "text-blue-500", bg: "bg-blue-50" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 xl:p-5 h-full flex flex-col">
      <h3 className="font-bold text-gray-800 text-sm xl:text-base mb-2 whitespace-nowrap">Attention Required</h3>
      
      {/* Removed gap and added padding directly to items for perfect borders */}
      <div className="flex flex-col flex-1 justify-center">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between py-3 xl:py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 cursor-pointer transition-colors px-1"
          >
            <div className="flex items-center gap-3 xl:gap-4 overflow-hidden">
              {/* shrink-0 ensures the icon box doesn't squeeze */}
              <div className={`shrink-0 p-2.5 rounded-xl ${item.bg} ${item.color}`}>
                <item.icon size={18} className="xl:w-5 xl:h-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <span className="block text-base xl:text-lg font-bold text-gray-800 leading-none">{item.count}</span>
                <span className="block text-[11px] xl:text-xs text-gray-500 mt-1 truncate tracking-tight">{item.label}</span>
              </div>
            </div>
            
            {/* Added strokeWidth={3} to make the arrow bolder, exactly like the image */}
            <ChevronRight size={16} strokeWidth={3} className="text-gray-500 shrink-0 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
}