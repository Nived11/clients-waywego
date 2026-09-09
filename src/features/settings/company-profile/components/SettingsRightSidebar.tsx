import { Shield, ChevronRight, Lock, MonitorSmartphone, Server, Database, Clock, Activity, Trash2, Download, Mail, MessageSquare, Share } from "lucide-react";

export default function SettingsRightSidebar() {
  return (
    <>
      {/* 1. Account Security */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-1">Account Security</h3>
        <p className="text-[10px] text-gray-500 font-medium mb-5">Manage your account security settings.</p>
        
        <div className="space-y-4 mb-5">
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[11px] font-bold text-gray-700">Password</span>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-black text-gray-400 tracking-widest mt-1">********</span>
              <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[11px] font-bold text-gray-700">Two Factor Authentication</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-bold border border-emerald-100">Enabled</span>
              <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[11px] font-bold text-gray-700">Login Sessions</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-bold border border-blue-100">3 Active</span>
              <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500" />
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-1.5 py-2 border border-gray-200 text-blue-600 rounded-lg text-[11px] font-bold hover:bg-blue-50 transition-colors">
          <Lock size={12} strokeWidth={2.5} /> Change Password
        </button>
      </div>

      {/* 2. System Information */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">System Information</h3>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-500">System Version</span>
            <span className="text-[11px] font-bold text-gray-800">v2.4.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-500">Environment</span>
            <span className="text-[11px] font-bold text-gray-800">Production</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-500">Last Backup</span>
            <span className="text-[11px] font-bold text-gray-800">19 May 2025, 02:30 AM</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-500">Database Size</span>
            <span className="text-[11px] font-bold text-gray-800">512.4 MB</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-500">Server Time</span>
            <span className="text-[11px] font-bold text-gray-800">20 May 2025, 10:30 AM</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-1.5 py-2 border border-gray-200 text-blue-600 rounded-lg text-[11px] font-bold hover:bg-blue-50 transition-colors">
          <Activity size={12} strokeWidth={2.5} /> View System Health
        </button>
      </div>

      {/* 3. Quick Actions */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-[13px] font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <button className="w-full flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Trash2 size={14} className="text-blue-500" /> Clear Cache
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Download size={14} className="text-purple-500" /> Backup Now
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Mail size={14} className="text-emerald-500" /> Email Test
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <MessageSquare size={14} className="text-amber-500" /> SMS Test
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              <Share size={14} className="text-rose-500" /> Export Settings
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

    </>
  );
}