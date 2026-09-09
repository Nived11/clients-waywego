"use client";

import { 
  ArrowLeft, Camera, EyeOff, Eye, ChevronDown, Check,
  LayoutDashboard, UserPlus, MessageSquare, FileText, CalendarCheck, 
  Users, Briefcase, MapPin, Building2, Ship, BarChart3, Settings, Users2,
  Info, Lightbulb, Mail, Calendar, Globe, UploadCloud, User
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface UserFormProps {
  isEditMode?: boolean; 
}

export default function UserForm({ isEditMode = false }: UserFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const modules = [
    { name: "Dashboard", desc: "Access to dashboard and analytics", icon: LayoutDashboard, color: "text-blue-500", bg: "bg-blue-50", checked: true },
    { name: "Leads", desc: "Manage and view leads", icon: UserPlus, color: "text-emerald-500", bg: "bg-emerald-50", checked: true },
    { name: "Queries", desc: "Manage customer queries", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-50", checked: true },
    { name: "Quotations", desc: "Create and manage quotations", icon: FileText, color: "text-amber-500", bg: "bg-amber-50", checked: true },
    { name: "Bookings", desc: "Manage bookings and itineraries", icon: CalendarCheck, color: "text-emerald-500", bg: "bg-emerald-50", checked: true },
    { name: "Customers", desc: "View and manage customers", icon: Users, color: "text-blue-500", bg: "bg-blue-50", checked: true },
    { name: "Suppliers", desc: "Manage supplier information", icon: Briefcase, color: "text-rose-500", bg: "bg-rose-50", checked: false },
    { name: "Destinations", desc: "Manage destinations", icon: MapPin, color: "text-indigo-500", bg: "bg-indigo-50", checked: false },
    { name: "Hotels", desc: "Manage hotel information", icon: Building2, color: "text-emerald-500", bg: "bg-emerald-50", checked: false },
    { name: "Houseboats", desc: "Manage houseboat information", icon: Ship, color: "text-purple-500", bg: "bg-purple-50", checked: false },
    { name: "Reports", desc: "Access reports and analytics", icon: BarChart3, color: "text-blue-500", bg: "bg-blue-50", checked: true },
    { name: "Settings", desc: "Access system settings", icon: Settings, color: "text-gray-500", bg: "bg-gray-100", checked: false },
    { name: "Users & Permissions", desc: "Manage users and permissions", icon: Users2, color: "text-purple-500", bg: "bg-purple-50", checked: false },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/teams-permissions" className="text-blue-600 cursor-pointer hover:underline">
              Users & Permissions
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit User' : 'Add New User'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">
            {isEditMode ? 'Edit User' : 'Add New User'}
          </h1>
          <p className="text-gray-500 text-xs font-medium mt-1">
            {isEditMode ? 'Update team member account and access details.' : 'Create a new team member account and assign role-based access.'}
          </p>
        </div>
        
        <Link 
          href="/teams-permissions" 
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Users
        </Link>
      </div>

      {/* MAIN FORM LAYOUT: 2 Columns for Form + 1 Sidebar */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT SECTION (Form Elements) ================= */}
        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            
            {/* 1. Basic Information */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">1</div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Basic Information</h2>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">Enter the user's personal and contact details.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-5">
                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-blue-500 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <Camera size={20} className="mb-1" />
                  </div>
                  <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800">Upload Photo</button>
                  <p className="text-[8px] text-gray-400 font-medium text-center">JPG, PNG up to 2MB</p>
                </div>

                {/* Form Fields */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter full name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Work Email <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="name@travelhope.com" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Phone Number</label>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
                      <div className="flex items-center gap-1.5 px-2.5 bg-gray-50 border-r border-gray-200 h-8">
                        <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-4 rounded-sm" />
                        <span className="text-[10px] font-bold text-gray-600">+91</span>
                        <ChevronDown size={12} className="text-gray-400" />
                      </div>
                      <input type="text" placeholder="98765 43210" className="flex-1 text-xs font-medium text-gray-800 px-3 py-2 outline-none placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Employee ID</label>
                    <input type="text" placeholder="e.g. EMP001" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Username <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="e.g. akhilsingh" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                    <p className="text-[9px] text-gray-400 font-medium mt-1">Used for system login. Keep it unique.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Role & Team Assignment */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">2</div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Role & Team Assignment</h2>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">Assign role, department and reporting structure.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">User Role <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option value="">Select a role</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Department / Team <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option value="">Select team</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Reporting Manager</label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option value="">Select manager</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Branch / Workspace <span className="text-red-500">*</span></label>
                  <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option value="">Select branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Designation</label>
                  <input type="text" placeholder="e.g. Senior Travel Consultant" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            {/* 3. Account Access */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">3</div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Account Access</h2>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">Set login credentials and account preferences.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Password <span className="text-red-500">*</span></label>
                  <div className="relative border border-gray-200 rounded-lg focus-within:ring-1 focus-within:ring-blue-500">
                    <input type={showPassword ? "text" : "password"} placeholder="Create a strong password" className="w-full text-xs font-medium text-gray-800 pl-3 pr-9 py-2 outline-none placeholder:text-gray-400 bg-transparent" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative border border-gray-200 rounded-lg focus-within:ring-1 focus-within:ring-blue-500">
                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" className="w-full text-xs font-medium text-gray-800 pl-3 pr-9 py-2 outline-none placeholder:text-gray-400 bg-transparent" />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showConfirmPassword ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="flex gap-2.5">
                  <label className="relative inline-flex items-start cursor-pointer mt-0.5 shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
                  </label>
                  <div>
                    <span className="text-[11px] font-bold text-gray-800 block leading-tight">Send invite email</span>
                    <span className="text-[9px] text-gray-500 font-medium">Send welcome email with login details</span>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <label className="relative inline-flex items-start cursor-pointer mt-0.5 shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
                  </label>
                  <div>
                    <span className="text-[11px] font-bold text-gray-800 block leading-tight">Force password reset</span>
                    <span className="text-[9px] text-gray-500 font-medium">User must reset password on first login</span>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-800 block leading-tight mb-1">Account Status</span>
                  <label className="flex items-center gap-2 cursor-pointer mt-1">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-emerald-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
                  </label>
                  <span className="text-[9px] text-gray-500 font-medium mt-1 block">User can log in to the system</span>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            
            {/* 4. Permissions */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">4</div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Permissions</h2>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">Assign module access or use a role preset.</p>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Permission Preset</label>
                <select className="w-full text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500 mb-1">
                  <option>Use role default permissions</option>
                  <option>Custom permissions</option>
                </select>
                <p className="text-[9px] text-gray-400 font-medium">You can customize permissions below if needed.</p>
              </div>

              <h3 className="text-xs font-bold text-gray-800 mb-3">Module Access</h3>
              <div className="space-y-0.5 border border-gray-100 rounded-xl overflow-hidden">
                {modules.map((mod, idx) => (
                  <label key={idx} className={`flex items-center justify-between p-2.5 cursor-pointer transition-colors border-b border-gray-50 last:border-0 ${mod.checked ? 'bg-blue-50/30 hover:bg-blue-50/50' : 'hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${mod.bg} ${mod.color}`}>
                        <mod.icon size={13} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-800">{mod.name}</p>
                        <p className="text-[9px] text-gray-500 font-medium">{mod.desc}</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center w-4 h-4 mr-1 shrink-0">
                      <input 
                        type="checkbox" 
                        defaultChecked={mod.checked}
                        className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer"
                      />
                      <Check size={12} strokeWidth={4} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Additional Details */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">5</div>
                <div>
                  <h2 className="text-[13px] font-bold text-gray-800">Additional Details</h2>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">Add more information about the user.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Preferred Language</label>
                  <select className="w-full text-[11px] font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option>English (US)</option>
                    <option>Malayalam</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Joining Date</label>
                  <div className="relative">
                    <input type="text" defaultValue="20 May 2025" readOnly className="w-full text-[11px] font-semibold text-gray-800 border border-gray-200 rounded-lg pl-8 pr-3 py-2 outline-none bg-white cursor-pointer" />
                    <Calendar size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Working Hours / Timezone</label>
                  <select className="w-full text-[11px] font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
                    <option>(GMT+05:30) India Standard Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Notes <span className="text-gray-400 font-medium">(Optional)</span></label>
                <textarea 
                  placeholder="Add any additional notes about this user..." 
                  className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400 h-16"
                ></textarea>
                <div className="flex justify-end mt-1">
                  <p className="text-[9px] text-gray-400 font-medium">0 / 500 characters</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SECTION (Sidebar / Preview) ================= */}
        <div className="w-full xl:w-[300px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* User Summary */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb size={14} className="text-amber-500" />
              <h3 className="text-[13px] font-bold text-gray-800">User Summary</h3>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mb-5">Live preview of user details.</p>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <User size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">New User</h4>
                <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                  <Mail size={10} /> Not invited yet
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <Briefcase size={12} /> <span className="text-[11px] font-bold">Role</span>
                </div>
                <span className="text-[10px] font-medium text-gray-400">Not selected</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <Users size={12} /> <span className="text-[11px] font-bold">Team</span>
                </div>
                <span className="text-[10px] font-medium text-gray-400">Not selected</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <Building2 size={12} /> <span className="text-[11px] font-bold">Branch</span>
                </div>
                <span className="text-[10px] font-medium text-gray-400">Not selected</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <Check size={12} /> <span className="text-[11px] font-bold">Status</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded text-[9px] font-bold">Active</span>
              </div>
            </div>
          </div>

          {/* Permission Preview */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[13px] font-bold text-gray-800">Permission Preview</h3>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mb-4">Modules the user will have access to:</p>
            
            <div className="space-y-2 mb-4">
              {modules.filter(m => m.checked).map((mod, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-blue-600 flex items-center justify-center text-white">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">{mod.name}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-2.5 flex items-start gap-2">
              <Info size={12} className="text-blue-500 mt-0.5 shrink-0" />
              <p className="text-[9px] text-blue-700 font-medium leading-relaxed">
                This preview updates automatically based on the selected role and permissions.
              </p>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-amber-50/30 border border-amber-100 p-5 rounded-2xl">
            <h3 className="text-[13px] font-bold text-amber-700 mb-3 flex items-center gap-2">
              <Lightbulb size={14} /> Quick Tips
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium leading-relaxed">
                <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                An invite email will be sent with login instructions when enabled.
              </li>
              <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium leading-relaxed">
                <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                Use a strong password (minimum 8 characters).
              </li>
              <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium leading-relaxed">
                <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                Assign the appropriate role to ensure proper access control.
              </li>
              <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium leading-relaxed">
                <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                Complete all required information for a smooth onboarding experience.
              </li>
              <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium leading-relaxed">
                <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                The user can reset their password on first login (if enabled).
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🔥 FIXED: Footer Actions (Sticky Bottom Style) */}
      <div className="sticky bottom-0 mt-8 bg-white border-t border-gray-200 py-4 z-40 flex items-center justify-between sm:justify-end gap-3 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
        <Link href="/teams-permissions" className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer mr-auto sm:mr-0">
          Cancel
        </Link>
        <button className="px-5 py-2.5 rounded-lg border border-blue-100 text-blue-600 bg-blue-50 text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer shadow-sm">
          Save User
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5">
          <UploadCloud size={14} strokeWidth={2.5} /> Save & Invite
        </button>
      </div>

    </div>
  );
}