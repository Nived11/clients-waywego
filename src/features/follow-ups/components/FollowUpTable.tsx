"use client";

import { Phone, MessageCircle, Mail, MoreVertical, ChevronDown } from "lucide-react";

export default function FollowUpTable() {
  const followUps = [
    { name: "Rahul Mathew", phone: "+91 98765 43210", dest: "Kerala", date: "15 Jun 2025", time: "10:30 AM", exec: "Akhil", execImg: "https://i.pravatar.cc/150?u=akhil", priority: "High", method: "Call", updated: "20 May, 09:15 AM", status: "Overdue" },
    { name: "Nisha Raj", phone: "+91 87654 32109", dest: "Dubai", date: "20 Aug 2025", time: "11:00 AM", exec: "Fathima", execImg: "https://i.pravatar.cc/150?u=fathima", priority: "Medium", method: "WhatsApp", updated: "20 May, 09:40 AM", status: "Due" },
    { name: "Jithin Joseph", phone: "+91 96543 21098", dest: "Kashmir", date: "10 Jul 2025", time: "12:00 PM", exec: "Amal", execImg: "https://i.pravatar.cc/150?u=amal", priority: "High", method: "Email", updated: "20 May, 10:05 AM", status: "Due" },
    { name: "Anand Kumar", phone: "+91 98701 23456", dest: "Maldives", date: "05 Sep 2025", time: "01:30 PM", exec: "Akhil", execImg: "https://i.pravatar.cc/150?u=akhil", priority: "Medium", method: "Call", updated: "20 May, 10:20 AM", status: "Upcoming" },
    { name: "Arjun P", phone: "+91 91234 56789", dest: "Thailand", date: "22 May 2025", time: "02:00 PM", exec: "Nisha", execImg: "https://i.pravatar.cc/150?u=nisha", priority: "Low", method: "WhatsApp", updated: "20 May, 09:50 AM", status: "Due" },
    { name: "Meera Krishnan", phone: "+91 99876 54321", dest: "Bali", date: "18 Jul 2025", time: "03:30 PM", exec: "Jithin", execImg: "https://i.pravatar.cc/150?u=jithin", priority: "Medium", method: "Email", updated: "20 May, 10:10 AM", status: "Upcoming" },
    { name: "Vishnu Mohan", phone: "+91 92345 67890", dest: "Singapore", date: "12 Jun 2025", time: "04:00 PM", exec: "Arjun", execImg: "https://i.pravatar.cc/150?u=arjun", priority: "High", method: "Call", updated: "20 May, 09:35 AM", status: "Due" },
    { name: "Sneha Thomas", phone: "+91 93456 78901", dest: "Europe", date: "28 Aug 2025", time: "04:30 PM", exec: "Meera", execImg: "https://i.pravatar.cc/150?u=meera", priority: "Low", method: "WhatsApp", updated: "20 May, 09:55 AM", status: "Upcoming" },
  ];

  const getPriorityStyle = (p: string) => {
    switch (p) {
      case 'High': return 'text-rose-500 font-bold';
      case 'Medium': return 'text-amber-500 font-bold';
      case 'Low': return 'text-emerald-500 font-bold';
      default: return 'text-gray-500';
    }
  };

  const getStatusBadge = (s: string) => {
    switch (s) {
      case 'Overdue': return 'bg-rose-50 text-rose-500 border border-rose-100';
      case 'Due': return 'bg-amber-50 text-amber-500 border border-amber-100';
      case 'Upcoming': return 'bg-blue-50 text-blue-500 border border-blue-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  const getMethodIcon = (m: string) => {
    switch (m) {
      case 'Call': return <Phone size={12} className="text-blue-500" />;
      case 'WhatsApp': return <MessageCircle size={12} className="text-emerald-500" />;
      case 'Email': return <Mail size={12} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1 pb-4">
        <table className="w-full text-left text-[11px] min-w-[1000px]">
          <thead className="bg-white text-gray-400 font-bold border-b border-gray-100">
            <tr>
              <th className="py-3 px-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-3 px-2">Customer</th>
              <th className="py-3 px-3">Destination</th>
              <th className="py-3 px-3">Travel Date</th>
              <th className="py-3 px-3">Follow-up Time</th>
              <th className="py-3 px-3">Executive</th>
              <th className="py-3 px-3">Priority</th>
              <th className="py-3 px-3">Contact Method</th>
              <th className="py-3 px-3">Last Update</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {followUps.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-2.5 px-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="py-2.5 px-2">
                  <div>
                    <p className="font-bold text-gray-800 text-[11px]">{row.name}</p>
                    <p className="text-[9px] text-gray-400 font-medium">{row.phone}</p>
                  </div>
                </td>
                <td className="py-2.5 px-3 font-semibold text-gray-600">{row.dest}</td>
                <td className="py-2.5 px-3 font-semibold text-gray-600">{row.date}</td>
                <td className="py-2.5 px-3 font-bold text-gray-800">{row.time}</td>
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-2">
                    <img src={row.execImg} alt={row.exec} className="w-5 h-5 rounded-full object-cover" />
                    <span className="font-bold text-gray-700">{row.exec}</span>
                  </div>
                </td>
                <td className={`py-2.5 px-3 ${getPriorityStyle(row.priority)}`}>{row.priority}</td>
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-1.5 font-semibold text-gray-600">
                    {getMethodIcon(row.method)} {row.method}
                  </div>
                </td>
                <td className="py-2.5 px-3 font-medium text-gray-500">{row.updated}</td>
                <td className="py-2.5 px-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${getStatusBadge(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-2.5 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-emerald-500 hover:text-emerald-600 transition-colors"><MessageCircle size={14}/></button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors"><Phone size={14}/></button>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors"><Mail size={14}/></button>
                    <button className="text-gray-400 hover:text-gray-700 transition-colors ml-1"><MoreVertical size={14}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 flex items-center justify-between text-[11px] font-medium text-gray-500 bg-white">
        <div>Showing 1 to 8 of 25 follow-ups</div>
        <div className="flex items-center gap-1.5">
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">&lt;</button>
          <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">2</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">3</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">4</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">&gt;</button>
        </div>
        <div className="flex items-center gap-1.5 border border-gray-200 rounded px-2 py-1 cursor-pointer">
          <span className="font-bold">8 / page</span>
          <ChevronDown size={12} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}