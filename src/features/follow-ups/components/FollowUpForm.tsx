"use client";

import { 
  ArrowLeft, Calendar as CalendarIcon, Phone, MessageCircle, Mail, ExternalLink, 
  MapPin, Users, User, Clock, FileText, UploadCloud, Info, ChevronDown, 
  CalendarCheck, AlertCircle, History
} from "lucide-react";
import Link from "next/link";

export default function FollowUpForm() {
  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/follow-ups" className="text-blue-600 cursor-pointer hover:underline">
              Follow-ups
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">Add Follow-up</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck size={22} className="text-blue-600" />
            <h1 className="text-2xl font-black text-[#1e3a5f]">Add Follow-up</h1>
          </div>
          <p className="text-gray-500 text-xs font-medium mt-1">
            Add a follow-up for the selected query. Keep track of customer communication and next steps.
          </p>
        </div>
        
        <Link 
          href="/follow-ups" 
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back
        </Link>
      </div>

      {/* Main Layout: 2 Columns */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT COLUMN (Query Details & History) ================= */}
        <div className="w-full xl:w-[420px] shrink-0 flex flex-col gap-6">
          
          {/* 1. Selected Query Details Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <User size={16} />
                </div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Selected Query Details</h2>
                  <p className="text-[10px] text-gray-500 font-medium">Query information from the tracker</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Follow Up
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-black shrink-0">
                M
              </div>
              <div>
                <h3 className="text-[15px] font-black text-gray-800 leading-tight">Mohanan</h3>
                <p className="text-[11px] font-bold text-gray-500 mt-1">Query ID: <span className="text-blue-600">#dh3479</span></p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              <button className="flex flex-col items-center justify-center gap-1.5 py-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold text-gray-600">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1.5 py-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageCircle size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold text-gray-600">WhatsApp</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1.5 py-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <Mail size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold text-gray-600">Email</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1.5 py-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <ExternalLink size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold text-gray-600">View Query</span>
              </button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
              <div className="flex gap-2">
                <Phone size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Phone Number</p>
                  <p className="text-[11px] font-bold text-gray-800">+91 90436 92307</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={13} className="text-gray-400 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-gray-500">Email</p>
                  <p className="text-[11px] font-bold text-gray-800 truncate">—</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Source</p>
                  <p className="text-[11px] font-bold text-gray-800">Chennai</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Destination Interest</p>
                  <p className="text-[11px] font-bold text-gray-800">Thekkady Package</p>
                </div>
              </div>
              <div className="flex gap-2">
                <CalendarIcon size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Travel Date</p>
                  <p className="text-[11px] font-bold text-gray-800">30 Sep 2025</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Clock size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Number of Days</p>
                  <p className="text-[11px] font-bold text-gray-800">3 days</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Users size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Number of Pax</p>
                  <p className="text-[11px] font-bold text-gray-800">7 adults</p>
                </div>
              </div>
              <div className="flex gap-2">
                <User size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Assigned Executive</p>
                  <p className="text-[11px] font-bold text-gray-800">Unassigned</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1"></div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Current Status</p>
                  <p className="text-[11px] font-bold text-gray-800 bg-amber-50 px-1.5 py-0.5 rounded w-fit mt-0.5">Follow Up</p>
                </div>
              </div>
              <div className="flex gap-2">
                <CalendarIcon size={13} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[9px] font-bold text-gray-500">Enquiry Date</p>
                  <p className="text-[11px] font-bold text-gray-800">31 Aug 2026</p>
                </div>
              </div>
            </div>

            {/* Last Note */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <FileText size={12} className="text-blue-500" />
                  <span className="text-[10px] font-bold text-blue-700">Last Note</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400">31 Aug 2026, 07:22 PM</span>
              </div>
              <p className="text-[11px] font-medium text-gray-600 pl-4">looking for thekkady package , total 7 adults...</p>
            </div>
          </div>

          {/* 2. Follow-up History */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
            <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <History size={14} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-gray-800">Follow-up History</h3>
                  <p className="text-[9px] text-gray-500 font-medium">Previous follow-ups for this query</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
            </div>

            <div className="relative pl-3 space-y-5 before:absolute before:inset-y-1 before:left-[15px] before:w-[1px] before:bg-gray-100">
              
              <div className="relative flex flex-col gap-1 pl-6">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full border-2 border-white ring-1 ring-amber-400 bg-amber-400 z-10"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-800">31 Aug 2026, 07:22 PM</span>
                  <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded text-[9px] font-bold">Follow Up</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400">System</span>
                <p className="text-[10px] text-gray-600 font-medium mt-0.5">looking for thekkady package , total 7 adults...</p>
              </div>

              <div className="relative flex flex-col gap-1 pl-6">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full border-2 border-white ring-1 ring-gray-300 bg-gray-400 z-10"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-800">31 Aug 2026, 05:36 PM</span>
                  <span className="px-1.5 py-0.5 bg-gray-50 text-gray-600 rounded text-[9px] font-bold">Not Interested</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400">Sales Team</span>
              </div>

              <div className="relative flex flex-col gap-1 pl-6">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full border-2 border-white ring-1 ring-purple-300 bg-purple-500 z-10"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-800">31 Aug 2026, 05:27 PM</span>
                  <span className="px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded text-[9px] font-bold">Proposal Sent</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400">Sales Team</span>
                <p className="text-[10px] text-gray-600 font-medium mt-0.5">honeymoon</p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Main Form) ================= */}
        <div className="flex-1 w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-8">
          
          <div className="flex items-start justify-between border-b border-gray-100 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <CalendarIcon size={16} />
              </div>
              <div>
                <h2 className="text-[14px] font-bold text-gray-800">Add Follow-up for this Query</h2>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5">Record your communication, update status and set next actions.</p>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-blue-50 rounded-lg">
              <span className="text-[11px] font-bold text-gray-700">Query ID: <span className="text-blue-600">#dh3479</span></span>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Follow-up Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>Phone Call</option>
                    <option>WhatsApp</option>
                  </select>
                  <Phone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Follow-up Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" defaultValue="02 Sep 2025" className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white" />
                  <CalendarIcon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Follow-up Time <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" defaultValue="11:00 AM" className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white" />
                  <Clock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Priority <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <AlertCircle size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500 pointer-events-none" />
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Communication Channel <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </select>
                  <Phone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Assigned Executive</label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>Travelhope admin</option>
                  </select>
                  <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Outcome / Status Update <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>Follow Up</option>
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 pointer-events-none"></div>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <div>
                  <span className="text-[11px] font-bold text-gray-800 block">Create reminder in Today's Follow-ups</span>
                  <span className="text-[9px] text-gray-500 font-medium">This will add the follow-up to your daily list.</span>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Next Action Date</label>
                <div className="relative">
                  <input type="text" defaultValue="05 Sep 2025" className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white" />
                  <CalendarIcon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Next Action Time</label>
                <div className="relative">
                  <input type="text" defaultValue="10:00 AM" className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white" />
                  <Clock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Notes / Remarks <span className="text-red-500">*</span></label>
              <textarea 
                className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-500 min-h-[80px] resize-none"
                defaultValue="Spoke with the customer. They are interested in Thekkady package. Will share detailed itinerary and pricing by tomorrow."
              ></textarea>
              <div className="flex justify-end mt-1">
                <span className="text-[9px] font-medium text-gray-400">93/1000</span>
              </div>
            </div>

            {/* Row 6 */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Attachment (Optional)</label>
              <div className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <UploadCloud size={16} className="text-gray-500" />
                  <span className="text-[11px] font-bold text-gray-700">Click to upload or drag and drop</span>
                </div>
                <span className="text-[9px] font-medium text-gray-400">PDF, DOC, DOCX, JPG, PNG (Max 5MB)</span>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-start gap-2.5">
              <Info size={14} className="text-blue-500 mt-0.5 shrink-0" />
              <p className="text-[11px] font-semibold text-blue-700">
                This follow-up will be linked to Query ID <span className="font-bold">#dh3479</span> and visible in the customer history.
              </p>
            </div>

          </form>

        </div>

      </div>

      {/* 🔥 Sticky Bottom Actions (Fully Responsive) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 z-40 flex items-center justify-between gap-2 sm:gap-3 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] lg:pl-[260px]">
        
        <Link href="/follow-ups" className="px-4 sm:px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-[11px] sm:text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer shrink-0">
          Cancel
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
          <button className="flex-1 sm:flex-none px-2 sm:px-6 py-2.5 rounded-lg border border-blue-100 text-blue-600 bg-blue-50 text-[10px] sm:text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
            <FileText size={14} className="hidden sm:block shrink-0" /> 
            <span>Save <span className="hidden min-[350px]:inline">Follow-up</span></span>
          </button>
          <button className="flex-1 sm:flex-none px-2 sm:px-6 py-2.5 rounded-lg bg-blue-600 text-white text-[10px] sm:text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap">
            <CalendarIcon size={14} className="hidden sm:block shrink-0" /> 
            <span>Save & <span className="hidden min-[350px]:inline">Schedule</span><span className="hidden sm:inline"> Next</span></span>
          </button>
        </div>

      </div>

    </div>
  );
}