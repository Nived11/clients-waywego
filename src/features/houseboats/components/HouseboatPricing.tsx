"use client";

import { 
  ArrowLeft, MapPin, Calendar as CalendarIcon, 
  Search, Filter, Edit2, MoreVertical, Copy, Layers, ChevronDown, 
  BedDouble, Users, Hash, CalendarDays, Plus, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function HouseboatPricing() {
  const existingPrices = [
    { type: "Deluxe Room", plan: "CP - Kerala Meals", date: "10 May 2025 - 15 May 2025", nights: "5 Nights", double: "₹ 11,500", extra: "₹ 1,900", childBed: "₹ 1,400", childNoBed: "₹ 900", inv: "2", status: "Published" },
    { type: "Deluxe Room", plan: "CP - Kerala Meals", date: "16 May 2025 - 31 May 2025", nights: "16 Nights", double: "₹ 12,000", extra: "₹ 2,000", childBed: "₹ 1,500", childNoBed: "₹ 1,000", inv: "2", status: "Published" },
    { type: "Deluxe Room", plan: "MAP - Kerala Meals", date: "20 May 2025 - 25 May 2025", nights: "5 Nights", double: "₹ 13,500", extra: "₹ 2,200", childBed: "₹ 1,600", childNoBed: "₹ 1,100", inv: "1", status: "Pending" },
    { type: "Premium Room", plan: "CP - Kerala Meals", date: "20 May 2025 - 25 May 2025", nights: "5 Nights", double: "₹ 14,000", extra: "₹ 2,400", childBed: "₹ 1,800", childNoBed: "₹ 1,200", inv: "1", status: "Pending" },
    { type: "Premium Room", plan: "MAP - Kerala Meals", date: "01 Jun 2025 - 15 Jun 2025", nights: "15 Nights", double: "₹ 15,000", extra: "₹ 2,500", childBed: "₹ 1,900", childNoBed: "₹ 1,300", inv: "2", status: "Draft" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/houseboats" className="text-blue-600 hover:underline">Houseboats</Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/houseboats" className="text-blue-600 hover:underline">Blue Wave Premium (KL-ALP-0012)</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-800">Room Type Pricing</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Houseboat Room Type Pricing</h1>
          <p className="text-gray-500 text-xs font-medium mt-1">Manage room type prices and availability for different date ranges.</p>
        </div>
      </div>

      {/* MAIN LAYOUT: Left Column (Info, Form, Table) | Right Column (Sidebar) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 w-full flex flex-col gap-6 min-w-0">
          
          {/* 1. Houseboat Info Card */}
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-5 items-center md:items-start">
            <img 
              src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=300&h=200&fit=crop" 
              alt="Blue Wave Premium" 
              className="w-full md:w-40 h-28 rounded-xl object-cover shrink-0" 
            />
            <div className="flex-1 min-w-0 w-full flex flex-col justify-center py-1">
              <div className="flex items-center gap-3 mb-2.5">
                <h2 className="text-lg font-black text-[#1e3a5f] leading-tight">Blue Wave Premium</h2>
                <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold rounded-md">Active</span>
              </div>
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><Hash size={13} className="text-gray-400" /> KL-ALP-0012</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gray-400" /> Alleppey, Kerala</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1.5"><BedDouble size={13} className="text-gray-400" /> Rooms: 6</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1.5"><Users size={13} className="text-gray-400" /> Guests: 12</span>
              </div>
              <Link href="#" className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors w-fit">
                View Houseboat Details <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* 2. Create / Update Price Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4 md:px-6">
              <button className="px-4 py-4 text-xs font-bold text-blue-600 border-b-2 border-blue-600">Price Manager</button>
              <button className="px-4 py-4 text-xs font-bold text-gray-500 hover:text-gray-700">Price Calendar</button>
              <button className="px-4 py-4 text-xs font-bold text-gray-500 hover:text-gray-700">Existing Prices</button>
            </div>

            <div className="p-5 md:p-6">
              <h3 className="text-[13px] font-bold text-gray-800 mb-5">Create / Update Price</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6">
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Room Type <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500 cursor-pointer">
                    <option>Select room type</option>
                    <option>Deluxe Room</option>
                    <option>Premium Room</option>
                    <option>Luxury Room</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meal Plan <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500 cursor-pointer">
                    <option>CP - Kerala Meals</option>
                    <option>MAP - Kerala Meals</option>
                    <option>AP - Kerala Meals</option>
                  </select>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Date Range <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 min-w-0">
                      <input type="text" value="20 May 2025" readOnly className="w-full text-[11px] md:text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none bg-white cursor-pointer" />
                      <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <span className="text-gray-400 font-bold">-</span>
                    <div className="relative flex-1 min-w-0">
                      <input type="text" value="25 May 2025" readOnly className="w-full text-[11px] md:text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none bg-white cursor-pointer" />
                      <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Nights</label>
                  <div className="w-full text-xs font-bold text-gray-800 py-2.5">
                    5 Nights
                  </div>
                </div>
              </div>

              <h3 className="text-xs font-bold text-gray-500 mb-4">Base Price (Per Night)</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Per Double Occupancy (2 Pax) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="12,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Extra Person (Per Pax)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="2,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Child With Bed (6-12 yrs)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="1,500" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Child Without Bed (6-12 yrs)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                    <input type="text" defaultValue="1,000" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Infant (0-5 yrs)</label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                    <option>Complimentary</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Max Guests</label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                    <option>12 Guests</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Room Inventory</label>
                  <input type="number" defaultValue="2" className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  <p className="text-[9px] text-gray-400 font-medium mt-1">No. of rooms available for this rate</p>
                </div>
                <div className="col-span-1 md:col-span-1 flex flex-col">
                  <label className="block text-[11px] font-bold text-gray-700 mb-2.5 flex items-center gap-1.5">
                    Day Use Rate <InfoCircle />
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-5 gap-4">
                <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  + Add Pricing Note (Optional)
                </button>
                <div className="flex items-center gap-3 ml-auto">
                  <button className="px-5 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">Reset</button>
                  <button className="px-5 py-2 bg-blue-600 rounded-lg text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-colors">Save Price</button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Existing Price List Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-[13px] font-bold text-gray-800 text-center md:text-left">Existing Price List</h3>
              <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search by room type or meal plan..." className="w-full pl-8 md:pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-medium outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <button className="flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-[11px] md:text-xs font-bold text-gray-700 hover:bg-gray-50 shrink-0">
                  <Filter size={14} /> Filters
                </button>
              </div>
            </div>

            <div className="overflow-x-auto w-full"> 
              <table className="w-full text-left text-[11px] min-w-[1050px]">
                <thead className="bg-white text-gray-500 font-bold border-b border-gray-100">
                  <tr>
                    <th className="py-4 px-5">Room Type</th>
                    <th className="py-4 px-4">Meal Plan</th>
                    <th className="py-4 px-4">Date Range</th>
                    <th className="py-4 px-4">Nights</th>
                    <th className="py-4 px-4 text-right">Double Occupancy</th>
                    <th className="py-4 px-4 text-right">Extra Person</th>
                    <th className="py-4 px-4 text-right">Child With Bed</th>
                    <th className="py-4 px-4 text-right">Child Without Bed</th>
                    <th className="py-4 px-4 text-center">Inventory</th>
                    <th className="py-4 px-4 text-center">Status</th>
                    <th className="py-4 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {existingPrices.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3 px-5 font-bold text-gray-800 whitespace-nowrap">{row.type}</td>
                      <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{row.plan}</td>
                      <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{row.date}</td>
                      <td className="py-3 px-4 font-semibold text-gray-500">{row.nights}</td>
                      <td className="py-3 px-4 font-bold text-gray-800 text-right">{row.double}</td>
                      <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.extra}</td>
                      <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.childBed}</td>
                      <td className="py-3 px-4 font-semibold text-gray-600 text-right">{row.childNoBed}</td>
                      <td className="py-3 px-4 font-bold text-gray-700 text-center">{row.inv}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold ${
                          row.status === 'Published' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                          row.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 
                          'bg-gray-50 text-rose-500 border border-rose-100'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-1.5">
                          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                            <Edit2 size={12} strokeWidth={2.5} />
                          </button>
                          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                            <MoreVertical size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-500">
              <p className="text-left w-full md:w-auto">Showing 1 to 5 of 24 entries</p>
              <div className="flex items-center justify-between md:justify-center w-full md:w-auto gap-2">
                <div className="flex items-center gap-1">
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&lt;</button>
                  <button className="w-6 h-6 rounded bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
                  <span className="px-0.5 md:px-1">...</span>
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">5</button>
                  <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">&gt;</button>
                </div>
                <div className="flex items-center justify-end gap-1 border border-gray-200 rounded px-2 py-1 shrink-0 cursor-pointer">
                  <span>10 / page</span> <ChevronDown size={12} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Price Calendar Sidebar Card */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Price Calendar</h3>
            <div className="flex items-center justify-between mb-4 px-1">
              <button className="text-gray-400 hover:text-gray-700">&lt;</button>
              <span className="text-xs font-bold text-gray-800">May 2025</span>
              <button className="text-gray-400 hover:text-gray-700">&gt;</button>
            </div>
            
            <div className="grid grid-cols-7 gap-y-3 text-center text-[11px] mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                <div key={d} className="font-bold text-gray-400 mb-1">{d}</div>
              ))}
              
              <div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div>
              {[...Array(31)].map((_, i) => {
                const date = i + 1;
                let dotClass = "bg-gray-200"; 
                if (date >= 10 && date <= 15) dotClass = "bg-emerald-500"; // Published
                if (date >= 16 && date <= 31) dotClass = "bg-emerald-500"; // Published
                if (date >= 1 && date <= 15 && date > 31) dotClass = "bg-amber-400"; // Pending
                if (date === 20) return (
                  <div key={date} className="relative flex flex-col items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{date}</div>
                    <div className={`w-1 h-1 rounded-full mt-1 ${dotClass}`}></div>
                  </div>
                );
                return (
                  <div key={date} className="flex flex-col items-center justify-center text-gray-700 font-bold">
                    <span>{date}</span>
                    <div className={`w-1 h-1 rounded-full mt-1 ${dotClass}`}></div>
                  </div>
                );
              })}
              <div className="text-gray-300">1</div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold text-gray-500">
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Published</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Pending</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div> No Price</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 rounded-xl transition-colors group text-left">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                    <Layers size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Bulk Update Prices</p>
                    <p className="text-[9px] text-gray-500 font-medium mt-0.5">Update prices for multiple room types</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 rounded-xl transition-colors group text-left">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <Copy size={14} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Copy Price</p>
                    <p className="text-[9px] text-gray-500 font-medium mt-0.5">Copy prices from another date range</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>

              <button className="w-full flex items-center justify-between p-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 rounded-xl transition-colors group text-left">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <CalendarDays size={14} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Price Calendar View</p>
                    <p className="text-[9px] text-gray-500 font-medium mt-0.5">View price calendar by room type</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

          {/* Room Types */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Room Types</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <BedDouble size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Deluxe Room</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500">2 Rooms</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <BedDouble size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Premium Room</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500">2 Rooms</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <BedDouble size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Luxury Room</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500">2 Rooms</span>
              </div>
              
              <button className="w-full mt-2 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors">
                <Plus size={14} strokeWidth={2.5} /> Add Room Type
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// InfoCircle Icon SVG helper
const InfoCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  </svg>
);