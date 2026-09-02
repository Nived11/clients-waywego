import { Eye, UserPlus, Phone, FileText, Globe, Infinity, Users, ChevronDown } from "lucide-react";

// Original WhatsApp Icon Custom Component
const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function QueryTable() {
  const tabs = [
    { name: "All", count: "248", active: true },
    { name: "New", count: "32" },
    { name: "Contacted", count: "45" },
    { name: "Requirement", count: "38" },
    { name: "Quotation Sent", count: "51" },
    { name: "Follow-up", count: "42" },
    { name: "Confirmed", count: "28" },
    { name: "Lost", count: "12" },
  ];

  const dummyData = [
    { id: "Q-2025-0248", customer: "Rahul Mathew", phone: "+91 98765 43210", dest: "Kerala", days: "5N/6D", date: "15 Jun 2025", source: "Website", sIcon: Globe, sColor: "text-indigo-800", assignee: "Akhil K", priority: "High", pColor: "text-rose-600 bg-rose-100", status: "New", sBadge: "text-blue-600 bg-blue-100", lastFollow: "-" },
    { id: "Q-2025-0247", customer: "Nisha Raj", phone: "+91 91234 56789", dest: "Dubai", days: "4N/5D", date: "20 Aug 2025", source: "WhatsApp", sIcon: WhatsAppIcon, sColor: "text-emerald-500", assignee: "Nisha R", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Contacted", sBadge: "text-teal-600 bg-teal-100", lastFollow: "19 May 2025\n2:15 PM" },
    { id: "Q-2025-0246", customer: "Jithin Jose", phone: "+91 99876 54321", dest: "Kashmir", days: "6N/7D", date: "10 Jul 2025", source: "Meta Ads", sIcon: Infinity, sColor: "text-blue-600", assignee: "Amal J", priority: "High", pColor: "text-rose-600 bg-rose-100", status: "Requirement", sBadge: "text-purple-600 bg-purple-100", lastFollow: "18 May 2025\n11:40 AM" },
    { id: "Q-2025-0245", customer: "Anand Kumar", phone: "+91 88990 11223", dest: "Maldives", days: "4N/5D", date: "05 Sep 2025", source: "Referral", sIcon: Users, sColor: "text-slate-700", assignee: "Akhil K", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Quotation Sent", sBadge: "text-indigo-600 bg-indigo-100", lastFollow: "18 May 2025\n04:20 PM" },
    { id: "Q-2025-0244", customer: "Arjun P", phone: "+91 77788 99001", dest: "Thailand", days: "5N/6D", date: "22 May 2025", source: "Website", sIcon: Globe, sColor: "text-indigo-800", assignee: "Thomas K", priority: "Low", pColor: "text-emerald-600 bg-emerald-100", status: "Follow-up", sBadge: "text-amber-600 bg-amber-100", lastFollow: "17 May 2025\n09:15 AM" },
    { id: "Q-2025-0243", customer: "Suresh B", phone: "+91 90000 44556", dest: "Bali", days: "4N/5D", date: "23 May 2025", source: "WhatsApp", sIcon: WhatsAppIcon, sColor: "text-emerald-500", assignee: "Nisha R", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Follow-up", sBadge: "text-amber-600 bg-amber-100", lastFollow: "17 May 2025\n10:05 AM" },
    { id: "Q-2025-0242", customer: "Fatima Ali", phone: "+91 81234 56701", dest: "Singapore", days: "3N/4D", date: "30 Jun 2025", source: "Website", sIcon: Globe, sColor: "text-indigo-800", assignee: "Amal J", priority: "Low", pColor: "text-emerald-600 bg-emerald-100", status: "Confirmed", sBadge: "text-emerald-600 bg-emerald-100", lastFollow: "16 May 2025\n03:30 PM" },
    { id: "Q-2025-0241", customer: "Vikas Sharma", phone: "+91 95678 12345", dest: "Kerala", days: "3N/4D", date: "12 Jun 2025", source: "Google Ads", sIcon: Globe, sColor: "text-amber-500", assignee: "Thomas K", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Lost", sBadge: "text-rose-600 bg-rose-100", lastFollow: "15 May 2025\n05:10 PM" },
    { id: "Q-2025-0241", customer: "Vikas Sharma", phone: "+91 95678 12345", dest: "Kerala", days: "3N/4D", date: "12 Jun 2025", source: "Google Ads", sIcon: Globe, sColor: "text-amber-500", assignee: "Thomas K", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Lost", sBadge: "text-rose-600 bg-rose-100", lastFollow: "15 May 2025\n05:10 PM" },
    { id: "Q-2025-0241", customer: "Vikas Sharma", phone: "+91 95678 12345", dest: "Kerala", days: "3N/4D", date: "12 Jun 2025", source: "Google Ads", sIcon: Globe, sColor: "text-amber-500", assignee: "Thomas K", priority: "Medium", pColor: "text-orange-600 bg-orange-100", status: "Lost", sBadge: "text-rose-600 bg-rose-100", lastFollow: "15 May 2025\n05:10 PM" },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      
      {/* Tabs */}
      <div className="flex items-center gap-6 px-5 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {tabs.map((tab, idx) => (
          <button key={idx} className={`py-6 xl:py-8 text-xs font-bold whitespace-nowrap border-b-2 transition-colors ${tab.active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>
            {tab.name} <span className="text-[11px] font-semibold text-gray-600 ml-1">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full flex-1">
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
          <tbody className="divide-y divide-gray-50">
            {dummyData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3 px-4"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></td>
                <td className="py-3 px-4 text-blue-600 font-semibold cursor-pointer whitespace-nowrap">{row.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <p className="font-bold text-gray-800">{row.customer}</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">{row.phone}</p>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <p className="font-semibold text-gray-800">{row.dest}</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">{row.days}</p>
                </td>
                <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{row.date}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 font-bold text-gray-700">
                    <row.sIcon size={14} className={row.sColor} strokeWidth={2.5} />
                    {row.source}
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                      {row.assignee.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 leading-tight">{row.assignee}</p>
                      <p className="text-[9px] text-gray-500 font-medium mt-0.5">Executive</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center whitespace-nowrap">
                  <span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold ${row.pColor}`}>{row.priority}</span>
                </td>
                <td className="py-3 px-4 text-center whitespace-nowrap">
                  <span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold ${row.sBadge}`}>{row.status}</span>
                </td>
                <td className="py-3 px-4 text-[10px] text-gray-600 font-medium whitespace-pre-line leading-relaxed">{row.lastFollow}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                      <Eye size={13} className="text-slate-700" strokeWidth={2} />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                      <UserPlus size={13} className="text-slate-700" strokeWidth={2} />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                      <Phone size={13} className="text-slate-700" strokeWidth={2} />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                      <WhatsAppIcon size={14} className="text-[#25D366]" />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                      <FileText size={13} className="text-slate-700" strokeWidth={2} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Centered Pagination Layout with Mobile Reordering */}
      <div className="border-t border-gray-100 p-4 py-6 sm:py-8 flex flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-y-4 sm:gap-4 text-xs font-medium text-gray-500 mt-auto bg-white">
        
        {/* Left: Info - Left on both Mobile & Desktop */}
        <div className="w-1/2 sm:w-1/3 order-1 text-left">
          <p className="whitespace-nowrap truncate sm:overflow-visible">Showing 1 to 10 of 248</p>
        </div>

        {/* Right: Dropdown - Right on Mobile (order-2), Right on Desktop (order-3) */}
        <div className="w-1/2 sm:w-1/3 order-2 sm:order-3 flex justify-end">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 sm:px-3 py-1.5 hover:bg-gray-50 cursor-pointer transition-colors">
            <span className="text-gray-700 font-semibold whitespace-nowrap">10 / page</span>
            <ChevronDown size={14} className="text-gray-400 shrink-0" />
          </div>
        </div>

        {/* Center: Pagination Buttons - Center on Mobile (order-3), Center on Desktop (order-2) */}
        <div className="w-full sm:w-1/3 order-3 sm:order-2 flex items-center justify-center gap-1 sm:gap-1.5 pt-1 sm:pt-0">
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">&lt;</button>
          <button className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm cursor-pointer">1</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">2</button>
          <button className="hidden sm:flex w-7 h-7 rounded-md border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">3</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">31</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">&gt;</button>
        </div>

      </div>
    </div>
  );
}