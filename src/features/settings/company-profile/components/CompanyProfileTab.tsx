"use client";

import { Edit2, UploadCloud, Calendar, Clock, DollarSign, Sun, List, LayoutDashboard, ChevronRight } from "lucide-react";

export default function CompanyProfileTab() {
  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* 1. Company Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 md:p-6 border-b border-gray-50 flex items-center justify-between">
          <div>
            <h2 className="text-[13px] font-bold text-gray-800">Company Profile</h2>
            <p className="text-[10px] text-gray-500 font-medium mt-0.5">Update your company information and branding.</p>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-200 text-blue-600 rounded-lg text-[10px] font-bold hover:bg-blue-50 transition-colors">
            <Edit2 size={12} strokeWidth={2.5} /> Edit Profile
          </button>
        </div>
        
        <div className="p-5 md:p-6 flex flex-col md:flex-row gap-8 items-start">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-4 w-full md:w-auto shrink-0">
            <div className="w-32 h-32 border-2 border-gray-100 rounded-xl flex items-center justify-center bg-white shadow-sm p-4 relative group cursor-pointer overflow-hidden">
              <div className="text-center">
                <span className="text-teal-400 font-black text-xl leading-none block">TRAVEL</span>
                <span className="text-blue-900 font-black text-xl leading-none block">HOPE</span>
                <span className="text-[7px] text-gray-400 tracking-[0.2em] font-medium block mt-1">- P V T L T D -</span>
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <UploadCloud className="text-white" size={24} />
              </div>
            </div>
            <div className="text-center">
              <button className="flex items-center justify-center gap-1.5 px-4 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-[10px] font-bold hover:bg-gray-50 transition-colors w-full">
                <UploadCloud size={12} strokeWidth={2.5} /> Change Logo
              </button>
              <p className="text-[8px] text-gray-400 font-medium mt-2">JPG, PNG or SVG. Max size 2MB.</p>
            </div>
          </div>

          {/* Company Details Grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 mb-1">Company Name</span>
              <span className="text-[11px] font-bold text-gray-800">Travel Hope Pvt Ltd</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 mb-1">Email</span>
              <span className="text-[11px] font-bold text-gray-800">info@travelhope.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 mb-1">Phone</span>
              <span className="text-[11px] font-bold text-gray-800">+91 98460 12345</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 mb-1">Website</span>
              <span className="text-[11px] font-bold text-gray-800">www.travelhope.com</span>
            </div>
            <div className="flex flex-col md:col-span-2">
              <span className="text-[10px] font-bold text-gray-500 mb-1">Address</span>
              <span className="text-[11px] font-bold text-gray-800">Dream Tower, 2nd Floor, Metro Pillar No. 123,<br/>Kochi, Kerala - 682018, India</span>
            </div>
            <div className="flex flex-col md:col-span-2">
              <span className="text-[10px] font-bold text-gray-500 mb-1">GST Number</span>
              <span className="text-[11px] font-bold text-gray-800">32ABCDE1234F1Z5</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Preferences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* System Preferences */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-50">
            <h2 className="text-[13px] font-bold text-gray-800">System Preferences</h2>
            <p className="text-[10px] text-gray-500 font-medium mt-0.5">Configure system wide preferences.</p>
          </div>
          <div className="p-5 flex flex-col gap-1">
            {[
              { label: "Date Format", value: "20 May 2025 (DD MMM YYYY)", icon: Calendar },
              { label: "Time Format", value: "10:30 AM (12 Hour)", icon: Clock },
              { label: "Currency", value: "INR - Indian Rupee (₹)", icon: DollarSign },
              { label: "Theme", value: "Light", icon: Sun },
              { label: "Items Per Page", value: "10 Items", icon: List },
              { label: "Default Dashboard", value: "Leads Dashboard", icon: LayoutDashboard },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 cursor-pointer group border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-2 rounded-lg -mx-2 transition-colors">
                <div className="flex items-center gap-2.5">
                  <item.icon size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-[11px] font-bold text-gray-700">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-gray-500">{item.value}</span>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Preferences */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-50">
            <h2 className="text-[13px] font-bold text-gray-800">Application Preferences</h2>
            <p className="text-[10px] text-gray-500 font-medium mt-0.5">Manage application specific preferences.</p>
          </div>
          <div className="p-5 flex flex-col gap-1">
            {[
              { label: "Enable Email Notifications", desc: "Receive email notifications for important activities.", checked: true },
              { label: "Enable SMS Notifications", desc: "Receive SMS alerts for follow-ups and reminders.", checked: true },
              { label: "Enable WhatsApp Notifications", desc: "Receive WhatsApp messages for important updates.", checked: true },
              { label: "Auto Follow-up Reminder", desc: "Send reminders for pending follow-ups.", checked: true },
              { label: "Duplicate Lead Checking", desc: "Prevent duplicate leads based on phone and email.", checked: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-2 rounded-lg -mx-2 transition-colors">
                <div className="flex flex-col pr-4">
                  <span className="text-[11px] font-bold text-gray-700">{item.label}</span>
                  <span className="text-[9px] font-medium text-gray-500 mt-0.5">{item.desc}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                  <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}