import { useState, useEffect } from "react";
import { Eye, UserPlus, Phone, FileText, Globe, Infinity, Users, Loader2, Check } from "lucide-react"; // Check icon കൂടി ആഡ് ചെയ്തു
import Pagination from "@/components/ui/Pagination"; 

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

interface QueryTableProps {
  queries: any[];
  loading: boolean;
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  stageCounts?: any; 
}

export default function QueryTable({ queries, loading, page, limit, totalCount, onPageChange, stageCounts }: QueryTableProps) {
  
  const [copiedId, setCopiedId] = useState<string | null>(null); // Copy ചെയ്ത ഐഡി ഓർക്കാൻ

  const tabs = [
    { name: "All", count: stageCounts?.all || 0, active: true },
    { name: "New", count: stageCounts?.new || 0 },
    { name: "Contacted", count: stageCounts?.contacted || 0 },
    { name: "Requirement", count: stageCounts?.requirement || 0 },
    { name: "Quotation Sent", count: stageCounts?.quotation_sent || 0 },
    { name: "Follow-up", count: stageCounts?.followup || 0 },
    { name: "Confirmed", count: stageCounts?.confirmed || 0 },
    { name: "Lost", count: stageCounts?.lost || 0 },
  ];

  const getSourceIcon = (sourceName: any) => {
    if (!sourceName || typeof sourceName !== 'string') return { Icon: Globe, color: "text-indigo-800" };
    const s = sourceName.toLowerCase();
    if (s.includes("whatsapp")) return { Icon: WhatsAppIcon, color: "text-emerald-500" };
    if (s.includes("meta") || s.includes("instagram") || s.includes("facebook")) return { Icon: Infinity, color: "text-blue-600" };
    if (s.includes("google")) return { Icon: Globe, color: "text-amber-500" };
    if (s.includes("reference") || s.includes("referral")) return { Icon: Users, color: "text-slate-700" };
    return { Icon: Globe, color: "text-indigo-800" };
  };

  const getPriorityStyle = (priority: string) => {
    const p = (priority || "").toLowerCase();
    if (p.includes("high") || p.includes("hot")) return "text-rose-600 bg-rose-100";
    if (p.includes("medium")) return "text-orange-600 bg-orange-100";
    if (p.includes("low")) return "text-emerald-600 bg-emerald-100";
    return "text-gray-600 bg-gray-100";
  };

  const getStatusStyle = (status: string) => {
    const s = (status || "").toLowerCase();
    if (s.includes("new")) return "text-blue-600 bg-blue-100";
    if (s.includes("contacted")) return "text-teal-600 bg-teal-100";
    if (s.includes("requirement")) return "text-purple-600 bg-purple-100";
    if (s.includes("quotation")) return "text-indigo-600 bg-indigo-100";
    if (s.includes("follow")) return "text-amber-600 bg-amber-100";
    if (s.includes("confirmed")) return "text-emerald-600 bg-emerald-100";
    if (s.includes("lost") || s.includes("cancel")) return "text-rose-600 bg-rose-100";
    return "text-gray-600 bg-gray-100";
  };

  // --- ACTIONS LOGIC ---
  const handleCall = (phone: string) => {
    if (!phone || phone === '-') return alert("Phone number is not available.");
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone: string) => {
    if (!phone || phone === '-') return alert("Phone number is not available.");
    const cleanPhone = phone.replace(/[^\d+]/g, ''); // അനാവശ്യ ചിഹ്നങ്ങൾ മാറ്റാൻ
    window.open(`https://wa.me/${cleanPhone}`, '_blank');
  };

  const handleCopy = async (data: any) => {
    const textToCopy = `Query ID: ${data.queryId}
Customer: ${data.customer} (${data.phone})
Destination: ${data.dest} (${data.days})
Travel Date: ${data.date}
Source: ${data.sourceStr}
Assigned To: ${data.assignee}
Priority: ${data.priority}
Status: ${data.status}
Last Follow-up: ${data.lastFollow}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(data.queryId);
      setTimeout(() => setCopiedId(null), 2000); // 2 സെക്കന്റിനു ശേഷം ഐക്കൺ പഴയതുപോലെ ആവാൻ
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Failed to copy details.");
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full relative">
      
      {/* Tabs */}
      <div className="flex items-center gap-6 px-5 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {tabs.map((tab, idx) => (
          <button key={idx} className={`py-6 xl:py-8 text-xs font-bold whitespace-nowrap border-b-2 transition-colors ${tab.active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>
            {tab.name} <span className="text-[11px] font-semibold text-gray-600 ml-1">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full flex-1 border-t border-gray-100">
        <table className="w-full text-left text-xs min-w-[1050px]">
          <thead className="bg-gray-100/70 text-gray-600 border-b border-gray-100 font-semibold">
            <tr>
              <th className="py-4 xl:py-6 px-4 w-12"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Query ID</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Customer</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Destination</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Travel Date</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Source</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Assigned To</th>
              <th className="py-4 xl:py-6 px-4 font-medium text-center whitespace-nowrap">Priority</th>
              <th className="py-4 xl:py-6 px-4 font-medium text-center whitespace-nowrap">Status</th>
              <th className="py-4 xl:py-6 px-4 font-medium whitespace-nowrap">Last Follow-up</th>
              <th className="py-4 xl:py-6 px-4 font-medium text-center whitespace-nowrap">Action</th>
            </tr>
          </thead>

          {/* Skeleton Loading or Table Body */}
          {loading ? (
            <tbody className="divide-y divide-gray-50">
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="animate-pulse bg-white">
                  <td className="py-4 px-4"><div className="w-4 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4"><div className="w-16 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4">
                    <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-20 h-3 bg-gray-100 rounded"></div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="w-20 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-10 h-3 bg-gray-100 rounded"></div>
                  </td>
                  <td className="py-4 px-4"><div className="w-20 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-200"></div><div className="w-16 h-4 bg-gray-200 rounded"></div></div></td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="w-24 h-4 bg-gray-200 rounded mb-1.5"></div>
                        <div className="w-12 h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center"><div className="w-16 h-6 bg-gray-200 rounded-md mx-auto"></div></td>
                  <td className="py-4 px-4 text-center"><div className="w-16 h-6 bg-gray-200 rounded-md mx-auto"></div></td>
                  <td className="py-4 px-4"><div className="w-20 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-1.5">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="w-7 h-7 bg-gray-200 rounded-md"></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : queries.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={11} className="py-20 text-center text-gray-500 font-medium text-sm">
                  No queries found for your search/filters.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-50">
              {queries.map((row, idx) => {
                const queryId = row.query_id || `Q-${row.id}`;
                const customer = row.customer?.name || row.client_name || 'Unknown';
                const phone = row.customer?.phone || row.phone_number || '-';
                const dest = row.destination?.name || row.sector_display || '-';
                const days = row.destination?.duration || (row.total_days ? `${row.total_days} Days` : '-');
                const date = row.travel_date || row.from_date || '-';
                const sourceStr = row.source?.name || row.lead_source_name || 'Website';
                const assignee = row.assigned_to?.name || row.assign_name || 'Unassigned';
                const assigneeInitials = row.assigned_to?.initials || assignee.substring(0, 2).toUpperCase();
                const priority = row.priority_display || 'Medium';
                const status = row.status_display || 'New';
                const lastFollow = row.last_followup || '-';

                const { Icon: SourceIcon, color: sColor } = getSourceIcon(sourceStr);
                const pColor = getPriorityStyle(priority);
                const sBadge = getStatusStyle(status);

                return (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3 px-4"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></td>
                    <td className="py-3 px-4 text-blue-600 font-semibold cursor-pointer whitespace-nowrap">{queryId}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <p className="font-bold text-gray-800">{customer}</p>
                      <p className="text-[10px] text-gray-500 font-medium mt-0.5">{phone}</p>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <p className="font-semibold text-gray-800">{dest}</p>
                      <p className="text-[10px] text-gray-500 font-medium mt-0.5">{days}</p>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{date}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 font-bold text-gray-700">
                        <SourceIcon size={14} className={sColor} />
                        {sourceStr}
                      </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                          {assigneeInitials}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 leading-tight">{assignee}</p>
                          <p className="text-[9px] text-gray-500 font-medium mt-0.5">Executive</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold ${pColor}`}>{priority}</span>
                    </td>
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold ${sBadge}`}>{status}</span>
                    </td>
                    <td className="py-3 px-4 text-[10px] text-gray-600 font-medium whitespace-pre-line leading-relaxed">{lastFollow}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-1.5">
                        
                        {/* Eye (Inactive) */}
                        <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors" title="View Query">
                          <Eye size={13} className="text-slate-700" strokeWidth={2} />
                        </div>
                        
                        {/* UserPlus (Inactive) */}
                        <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors" title="Assign User">
                          <UserPlus size={13} className="text-slate-700" strokeWidth={2} />
                        </div>
                        
                        {/* Phone (Active) */}
                        <div 
                          onClick={() => handleCall(phone)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors" 
                          title="Call Customer"
                        >
                          <Phone size={13} className="text-slate-700" strokeWidth={2} />
                        </div>
                        
                        {/* WhatsApp (Active) */}
                        <div 
                          onClick={() => handleWhatsApp(phone)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-green-50 cursor-pointer transition-colors" 
                          title="WhatsApp Customer"
                        >
                          <WhatsAppIcon size={14} className="text-[#25D366]" />
                        </div>
                        
                        {/* Copy to Clipboard (Active with feedback) */}
                        <div 
                          onClick={() => handleCopy({ queryId, customer, phone, dest, days, date, sourceStr, assignee, priority, status, lastFollow })}
                          className={`w-7 h-7 flex items-center justify-center border rounded-md cursor-pointer transition-all duration-300 ${
                            copiedId === queryId ? "bg-green-50 border-green-200 text-emerald-600" : "border-gray-200 hover:bg-gray-100 text-slate-700"
                          }`}
                          title="Copy Details"
                        >
                          {copiedId === queryId ? <Check size={14} strokeWidth={3} /> : <FileText size={13} strokeWidth={2} />}
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      
      {/* Reusable Pagination Component */}
      <Pagination 
        page={page} 
        limit={limit} 
        totalCount={totalCount} 
        onPageChange={onPageChange} 
      />

    </div>
  );
}