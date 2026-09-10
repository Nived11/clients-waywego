"use client";

import { Edit2, Eye, Star, User, Building, Car, Plane, Anchor, Tent, MoreVertical,ChevronDown } from "lucide-react";

export default function SupplierTable() {
  const suppliers = [
    { name: "Kerala Tourism Services", code: "SUP-001", type: "Tour Operator", icon: User, cat: "Tour Operator", contact: "Sreejith Nair", role: "Manager", phone: "+91 98460 12345", email: "info@keralatourism.com", status: "Active", rating: 4.8, bg: "bg-emerald-100", color: "text-emerald-600", initial: "KT" },
    { name: "Wayanad Holidays", code: "SUP-002", type: "Hotel", icon: Building, cat: "Accommodation", contact: "Anil Kumar", role: "Sales Head", phone: "+91 94970 67890", email: "sales@wayanadholidays.in", status: "Active", rating: 4.6, bg: "bg-blue-100", color: "text-blue-600", initial: "WH" },
    { name: "Mountain Travels", code: "SUP-003", type: "Transport", icon: Car, cat: "Transport", contact: "Jomon Joseph", role: "Operations", phone: "+91 94470 11223", email: "ops@mountaintravels.com", status: "Active", rating: 4.4, bg: "bg-purple-100", color: "text-purple-600", initial: "MT" },
    { name: "Backwater Houseboats", code: "SUP-004", type: "Houseboat", icon: Anchor, cat: "Houseboat", contact: "Binu Varghese", role: "Manager", phone: "+91 94460 99887", email: "bookings@backwaters.com", status: "Active", rating: 4.7, bg: "bg-amber-100", color: "text-amber-600", initial: "BH" },
    { name: "Adventure Destinations", code: "SUP-005", type: "Activity", icon: Tent, cat: "Adventure", contact: "Nikhil R", role: "Coordinator", phone: "+91 98950 55667", email: "info@adventuredest.com", status: "Pending", rating: 4.2, bg: "bg-cyan-100", color: "text-cyan-600", initial: "AD" },
    { name: "Fly Tech Aviation", code: "SUP-006", type: "Flight", icon: Plane, cat: "Airlines", contact: "Rahul Menon", role: "Account Manager", phone: "+91 98470 33445", email: "rahul@flytechaviation.com", status: "Active", rating: 4.5, bg: "bg-rose-100", color: "text-rose-600", initial: "FT" },
    { name: "Vision India MICE", code: "SUP-007", type: "MICE", icon: Building, cat: "MICE", contact: "Leena Francis", role: "Business Head", phone: "+91 94470 22110", email: "leena@visionindia.com", status: "Inactive", rating: 3.8, bg: "bg-slate-200", color: "text-slate-600", initial: "VI" },
    { name: "Temple Pilgrimages", code: "SUP-008", type: "Tour Operator", icon: User, cat: "Pilgrimage", contact: "Ramesh Babu", role: "Manager", phone: "+91 94470 77889", email: "contact@templepilgrim.com", status: "Pending", rating: 4.0, bg: "bg-orange-100", color: "text-orange-600", initial: "TP" },
    { name: "Temple Pilgrimages", code: "SUP-008", type: "Tour Operator", icon: User, cat: "Pilgrimage", contact: "Ramesh Babu", role: "Manager", phone: "+91 94470 77889", email: "contact@templepilgrim.com", status: "Pending", rating: 4.0, bg: "bg-orange-100", color: "text-orange-600", initial: "TP" },
    { name: "Temple Pilgrimages", code: "SUP-008", type: "Tour Operator", icon: User, cat: "Pilgrimage", contact: "Ramesh Babu", role: "Manager", phone: "+91 94470 77889", email: "contact@templepilgrim.com", status: "Pending", rating: 4.0, bg: "bg-orange-100", color: "text-orange-600", initial: "TP" },
    { name: "Temple Pilgrimages", code: "SUP-008", type: "Tour Operator", icon: User, cat: "Pilgrimage", contact: "Ramesh Babu", role: "Manager", phone: "+91 94470 77889", email: "contact@templepilgrim.com", status: "Pending", rating: 4.0, bg: "bg-orange-100", color: "text-orange-600", initial: "TP" },
    { name: "Temple Pilgrimages", code: "SUP-008", type: "Tour Operator", icon: User, cat: "Pilgrimage", contact: "Ramesh Babu", role: "Manager", phone: "+91 94470 77889", email: "contact@templepilgrim.com", status: "Pending", rating: 4.0, bg: "bg-orange-100", color: "text-orange-600", initial: "TP" },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"} />
          ))}
        </div>
        <span className="text-[10px] font-bold text-gray-700 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const getStatusStyle = (status: string) => {
    if (status === 'Active') return 'bg-emerald-50 text-emerald-600';
    if (status === 'Inactive') return 'bg-rose-50 text-rose-600';
    return 'bg-amber-50 text-amber-600';
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1 pb-4">
        {/* min-w കൂട്ടുകയും എല്ലാ കോൺടെൻ്റിലും whitespace-nowrap നൽകുകയും ചെയ്തു */}
        <table className="w-full text-left text-[11px] min-w-[1250px]">
          <thead className="bg-white text-gray-500 border-b border-gray-100 font-bold">
            <tr>
              <th className="py-4 px-4 w-10 whitespace-nowrap"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-4 px-2 whitespace-nowrap">Supplier Name</th>
              <th className="py-4 px-4 whitespace-nowrap">Type</th>
              <th className="py-4 px-4 whitespace-nowrap">Category</th>
              <th className="py-4 px-4 whitespace-nowrap">Contact Person</th>
              <th className="py-4 px-4 whitespace-nowrap">Phone</th>
              <th className="py-4 px-4 whitespace-nowrap">Email</th>
              <th className="py-4 px-4 whitespace-nowrap">Status</th>
              <th className="py-4 px-4 whitespace-nowrap">Rating</th>
              <th className="py-4 px-4 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {suppliers.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3 px-4 whitespace-nowrap"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] shrink-0 ${row.bg} ${row.color}`}>
                      {row.initial}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{row.name}</p>
                      <p className="text-[9px] text-gray-400 font-medium">Supplier Code: {row.code}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className={`flex items-center gap-1.5 font-bold ${row.color}`}>
                    <row.icon size={12} strokeWidth={2.5} /> {row.type}
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-gray-700 whitespace-nowrap">{row.cat}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div>
                    <p className="font-bold text-gray-800">{row.contact}</p>
                    <p className="text-[9px] text-gray-500 font-medium">{row.role}</p>
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-gray-600 whitespace-nowrap">{row.phone}</td>
                <td className="py-3 px-4 font-medium text-gray-600 whitespace-nowrap">{row.email}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{renderStars(row.rating)}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors"><Eye size={14} strokeWidth={2.5} /></button>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors"><Edit2 size={13} strokeWidth={2.5} /></button>
                    {/* Added 3 dots menu icon */}
                    <button className="text-gray-400 hover:text-blue-600 transition-colors"><MoreVertical size={14} strokeWidth={2.5} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-100 p-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 bg-white">
        <div>Showing 1 to 8 of 156 suppliers</div>
        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">&lt;</button>
          <button className="w-7 h-7 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">2</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">3</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">4</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">20</button>
          <button className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">&gt;</button>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer">
          <span className="font-bold text-gray-700">10 / page</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}