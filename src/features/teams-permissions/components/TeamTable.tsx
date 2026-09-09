"use client";

import { useState } from "react";
import { Edit2, MoreVertical, Eye, Trash2, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TeamTable() {
  const users = [
    { name: "Akhil", isYou: true, email: "akhil@travelhope.com", role: "Super Admin", team: "Management", status: "Active", login: "20 May 2025, 10:30 AM", online: true, joined: "15 Jan 2024", img: "https://i.pravatar.cc/150?u=akhil" },
    { name: "Rakesh Nair", email: "rakesh@travelhope.com", role: "Admin", team: "Operations", status: "Active", login: "20 May 2025, 09:15 AM", online: true, joined: "10 Feb 2024", img: "https://i.pravatar.cc/150?u=rakesh" },
    { name: "Fathima Parveen", email: "fathima@travelhope.com", role: "Manager", team: "Sales", status: "Active", login: "20 May 2025, 08:45 AM", online: true, joined: "05 Mar 2024", img: "https://i.pravatar.cc/150?u=fathima" },
    { name: "Jithin Joseph", email: "jithin@travelhope.com", role: "Sales Executive", team: "Sales", status: "Active", login: "19 May 2025, 04:30 PM", online: true, joined: "18 Mar 2024", img: "https://i.pravatar.cc/150?u=jithin" },
    { name: "Nisha N", email: "nisha@travelhope.com", role: "Support Executive", team: "Support", status: "Active", login: "19 May 2025, 03:20 PM", online: true, joined: "01 Apr 2024", img: "https://i.pravatar.cc/150?u=nisha" },
    { name: "Arjun P", email: "arjun@travelhope.com", role: "Accountant", team: "Accounts", status: "Inactive", login: "17 May 2025, 11:10 AM", online: false, joined: "20 Apr 2024", offlineText: "2 days ago", img: "https://i.pravatar.cc/150?u=arjun" },
    { name: "Meera Krishnan", email: "meera@travelhope.com", role: "Sales Executive", team: "Sales", status: "Active", login: "20 May 2025, 07:55 AM", online: true, joined: "02 May 2024", img: "https://i.pravatar.cc/150?u=meera" },
    { name: "Vishnu Mohan", email: "vishnu@travelhope.com", role: "Support Executive", team: "Support", status: "Inactive", login: "15 May 2025, 05:20 PM", online: false, joined: "15 May 2024", offlineText: "5 days ago", img: "https://i.pravatar.cc/150?u=vishnu" },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Super Admin': return 'bg-purple-100 text-purple-700';
      case 'Admin': return 'bg-blue-100 text-blue-700';
      case 'Manager': return 'bg-emerald-100 text-emerald-700';
      case 'Sales Executive': return 'bg-blue-50 text-blue-600';
      case 'Support Executive': return 'bg-orange-50 text-orange-600';
      case 'Accountant': return 'bg-indigo-50 text-indigo-600';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1 pb-8">
        <table className="w-full text-left text-[11px] min-w-[1050px]">
          <thead className="bg-white text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="py-4 px-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-4 px-2">User</th>
              <th className="py-4 px-4">Role</th>
              <th className="py-4 px-4">Team</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Last Login</th>
              <th className="py-4 px-4">Joined On</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3 px-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <img src={row.img} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-800 text-[11px] flex items-center gap-1.5">
                        {row.name}
                        {row.isYou && <span className="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-[8px] font-black">You</span>}
                      </p>
                      <p className="text-[10px] text-gray-500 font-medium mt-0.5">{row.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-[9px] font-bold ${getRoleBadge(row.role)}`}>
                    {row.role}
                  </span>
                </td>
                <td className="py-3 px-4 font-bold text-gray-700">{row.team}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.status === 'Active' ? 'text-emerald-500 bg-emerald-50' : 'text-rose-500 bg-rose-50'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <p className="font-bold text-gray-700 text-[10px]">{row.login}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${row.online ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                    <span className="text-[9px] font-bold text-gray-500">{row.online ? 'Online' : row.offlineText}</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-semibold text-gray-600">{row.joined}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                      <Eye size={12} strokeWidth={2.5} />
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                      <Edit2 size={12} strokeWidth={2.5} />
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                      <MoreVertical size={13} strokeWidth={2.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-500 bg-white">
        <div className="w-full sm:w-1/3 text-left">
          <p>Showing 1 to 8 of 48 users</p>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center gap-1.5">
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
          <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <span className="px-0.5">...</span>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">6</button>
          <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1.5 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700 font-bold">10 / page</span>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}