"use client";

import { 
  ArrowLeft, Calendar as CalendarIcon, Edit2, MoreVertical, 
  Copy, ChevronDown, CarFront, Hash, Fuel, Users, MapPin, User,
  Trash2, Plus, Info, Clock, Download, Check, ChevronRight, Eye
} from "lucide-react";
import Link from "next/link";

export default function VehiclePricing() {
  const slabs = [
    { from: "0", to: "250", rate: "18.00", desc: "0 - 250 KM" },
    { from: "251", to: "500", rate: "16.00", desc: "251 - 500 KM" },
    { from: "501", to: "1000", rate: "14.00", desc: "501 - 1000 KM" },
    { from: "1001", to: "2000", rate: "12.00", desc: "1001 - 2000 KM" },
    { from: "2001", to: "99999", rate: "11.00", desc: "Above 2000 KM" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] font-bold text-gray-500 mb-2">
            <Link href="/vehicles" className="text-blue-600 hover:underline">Vehicles</Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/vehicles" className="text-blue-600 hover:underline">Toyota Innova Crysta (KL 07 CP 1234)</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-800">Manage Price</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Vehicle Price for Kilometres</h1>
          <p className="text-gray-500 text-[11px] font-medium mt-1">Set vehicle pricing based on kilometres with different slabs.</p>
        </div>
        
        <Link 
          href="/vehicles" 
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Vehicle
        </Link>
      </div>

      {/* MAIN LAYOUT: Left Column | Right Column */}
      <div className="flex flex-col xl:flex-row gap-6 items-start mb-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 w-full flex flex-col gap-6 min-w-0">
          
          {/* 1. Vehicle Info Card */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop" 
              alt="Toyota Innova Crysta" 
              className="w-full md:w-44 h-28 rounded-xl object-cover shrink-0 border border-gray-100" 
            />
            <div className="flex-1 min-w-0 w-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-black text-[#1e3a5f] leading-tight">Toyota Innova Crysta</h2>
                <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold rounded-md">Active</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold"><Hash size={12}/> Reg. No.</span>
                  <span className="text-[11px] font-bold text-gray-800">KL 07 CP 1234</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold"><CarFront size={12}/> Vehicle Type</span>
                  <span className="text-[11px] font-bold text-gray-800">SUV</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold"><Fuel size={12}/> Fuel Type</span>
                  <span className="text-[11px] font-bold text-gray-800">Diesel</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold"><Users size={12}/> Seating Capacity</span>
                  <span className="text-[11px] font-bold text-gray-800">7 + 1</span>
                </div>
                <div className="flex flex-col gap-1 col-span-2 md:col-span-4 border-t border-gray-50 pt-3 mt-1">
                  <div className="flex items-center gap-5">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-600"><MapPin size={12} className="text-gray-400"/> Kochi, Kerala</span>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600"><User size={12}/> Ramesh Kumar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Create / Update Price Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-5 md:p-6">
            <h3 className="text-[13px] font-bold text-gray-800 mb-5">Create / Update Price</h3>
            
            <div className="flex flex-col lg:flex-row gap-6 mb-8 border-b border-gray-100 pb-8">
              
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Valid From <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" defaultValue="20 May 2025" readOnly className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none bg-white cursor-pointer" />
                    <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Valid To</label>
                  <div className="relative">
                    <input type="text" placeholder="Select date" readOnly className="w-full text-xs font-medium text-gray-400 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none bg-white cursor-pointer" />
                    <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Rate Type <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white cursor-pointer">
                    <option>Per Kilometre</option>
                    <option>Per Day</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Minimum Billing <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white cursor-pointer">
                    <option>250 Kilometres</option>
                    <option>300 Kilometres</option>
                  </select>
                </div>
              </div>

              {/* Pricing Rules Info Box */}
              <div className="w-full lg:w-[320px] bg-blue-50/50 border border-blue-100 rounded-xl p-4">
                <h4 className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 mb-2">
                  <Info size={14} /> Pricing Rules
                </h4>
                <ul className="space-y-1.5 pl-5 list-disc text-[10px] text-gray-600 font-medium leading-relaxed">
                  <li>Minimum billing will be applicable for each booking.</li>
                  <li>Extra kilometres beyond the slab will be charged as per the last slab rate.</li>
                  <li>Toll, Parking, Driver Allowance, and State Taxes will be charged extra.</li>
                </ul>
              </div>
            </div>

            {/* Kilometre Slabs Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-800 mb-4">Kilometre Slabs</h3>
              
              {/* Slabs Table Header */}
              <div className="grid grid-cols-12 gap-3 mb-2 px-1">
                <div className="col-span-2 text-[10px] font-bold text-gray-500">From (KM) <span className="text-red-500">*</span></div>
                <div className="col-span-2 text-[10px] font-bold text-gray-500">To (KM) <span className="text-red-500">*</span></div>
                <div className="col-span-3 text-[10px] font-bold text-gray-500">Rate (₹ Per KM) <span className="text-red-500">*</span></div>
                <div className="col-span-4 text-[10px] font-bold text-gray-500">Description (Optional)</div>
                <div className="col-span-1 text-[10px] font-bold text-gray-500 text-center">Action</div>
              </div>

              {/* Slabs Rows */}
              <div className="space-y-2 mb-4">
                {slabs.map((slab, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-2">
                      <input type="text" defaultValue={slab.from} readOnly className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-gray-50" />
                    </div>
                    <div className="col-span-2">
                      <input type="text" defaultValue={slab.to} readOnly={idx !== slabs.length - 1} className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500" />
                    </div>
                    <div className="col-span-3 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₹</span>
                      <input type="text" defaultValue={slab.rate} className="w-full text-xs font-bold text-gray-800 border border-gray-200 rounded-lg pl-7 pr-3 py-2 outline-none focus:border-blue-500" />
                    </div>
                    <div className="col-span-4">
                      <input type="text" defaultValue={slab.desc} className="w-full text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500" />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <button className="w-7 h-7 flex items-center justify-center bg-rose-50 text-rose-500 rounded hover:bg-rose-100 transition-colors">
                        <Trash2 size={13} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
                <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-700 shadow-sm transition-colors w-fit">
                  <Plus size={14} strokeWidth={2.5} /> Add Slab
                </button>
                <div className="bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-2 rounded-lg flex-1">
                  Note: Slabs should be continuous. The 'To (KM)' of one slab will be the 'From (KM)' of the next slab + 1.
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-wrap items-center justify-end border-t border-gray-100 pt-5 gap-3">
                <button className="px-6 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">Reset</button>
                <button className="px-6 py-2 bg-blue-600 rounded-lg text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-colors">Save Price</button>
              </div>
            </div>
          </div>

          {/* 3. Existing Price List Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col mb-10">
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-[13px] font-bold text-gray-800">Existing Price List</h3>
            </div>

            <div className="overflow-x-auto w-full"> 
              <table className="w-full text-left text-[11px] min-w-[900px]">
                <thead className="bg-white text-gray-500 font-bold border-b border-gray-100">
                  <tr>
                    <th className="py-4 px-5">Valid From</th>
                    <th className="py-4 px-4">Valid To</th>
                    <th className="py-4 px-4">Rate Type</th>
                    <th className="py-4 px-4 text-center">Minimum Billing</th>
                    <th className="py-4 px-4 text-center">Slabs</th>
                    <th className="py-4 px-4">Created By</th>
                    <th className="py-4 px-4 text-center">Status</th>
                    <th className="py-4 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-gray-800">01 Apr 2025</td>
                    <td className="py-4 px-4 font-bold text-gray-800">19 May 2025</td>
                    <td className="py-4 px-4 font-semibold text-gray-600">Per Kilometre</td>
                    <td className="py-4 px-4 font-bold text-gray-700 text-center">200 KM</td>
                    <td className="py-4 px-4 font-bold text-gray-700 text-center">5 Slabs</td>
                    <td className="py-4 px-4 font-medium text-gray-500">travelhope admin</td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold">Active</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-blue-600 transition-colors">
                          <Eye size={12} strokeWidth={2.5} />
                        </button>
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-500">
              <p>Showing 1 to 1 of 1 entries</p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Price Summary */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Price Summary (Per KM)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500">Minimum Billing</span>
                <span className="text-[11px] font-bold text-gray-800">250 KM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500">Base Slab (0 - 250 KM)</span>
                <span className="text-[11px] font-bold text-gray-800">₹ 18.00 / KM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500">Highest Slab (2001+ KM)</span>
                <span className="text-[11px] font-bold text-gray-800">₹ 11.00 / KM</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1">
                <span className="text-[11px] font-bold text-gray-500">Total Slabs</span>
                <span className="text-[11px] font-bold text-gray-800">5</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Copy size={14} className="text-gray-400 group-hover:text-blue-500" /> Copy Price from Another Vehicle
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Clock size={14} className="text-gray-400 group-hover:text-blue-500" /> View Price History
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group text-left">
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Download size={14} className="text-gray-400 group-hover:text-blue-500" /> Export Price List
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

          {/* Helpful Information */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Info size={14} /> Helpful Information
            </h3>
            <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
              These prices will be applicable for all bookings using this vehicle during the validity period.
            </p>
          </div>

          {/* Rate Inclusions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4">Rate Inclusions</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> Driver Allowance
              </li>
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> Fuel <span className="text-gray-400 font-medium">(if included in package)</span>
              </li>
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> State Taxes
              </li>
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> Basic Insurance
              </li>
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> Toll & Parking <span className="text-gray-400 font-medium">(Extra)</span>
              </li>
              <li className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                <Check size={14} className="text-emerald-500" strokeWidth={3} /> Night Charges <span className="text-gray-400 font-medium">(If applicable)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}