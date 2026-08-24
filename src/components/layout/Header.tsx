"use client";

import { Menu, Search, Plus, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 z-10 shrink-0">
      
      {/* Left: Menu & Search */}
      <div className="flex items-center gap-4 lg:gap-8 flex-1">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
          <Menu size={20} />
        </button>
        
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-full max-w-md focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium ml-2">
            <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5">Ctrl</kbd>
            <span>+</span>
            <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5">K</kbd>
          </div>
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-sm">
            <Plus size={18} />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full transition relative">
            <Bell size={18} />
            {/* Red Notification Dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
          </button>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>

        {/* Profile Info */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition">
          <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-sm">
            T
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-gray-700 leading-tight">travelhope admin</p>
            <p className="text-[11px] text-gray-500">Client Admin</p>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        
      </div>
    </header>
  );
}