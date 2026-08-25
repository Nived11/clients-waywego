"use client";

import { Search, Plus, Bell, ChevronDown, AlignLeft } from "lucide-react";

// Props add cheyyunnu
interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export default function Header({ toggleSidebar, isOpen }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 z-10 shrink-0">
      
      {/* Left: Menu Button */}
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-100"
          aria-label="Toggle Sidebar"
        >
          {/* Menu icon custom aayi theerthekkunnu (screenshot-le pole 3 lines varying width) */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="15" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-full max-w-lg focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
          <Search size={18} className="text-gray-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium ml-2 shrink-0">
            <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">Ctrl</kbd>
            <span>+</span>
            <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">K</kbd>
          </div>
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-3 lg:gap-5 shrink-0">
        
        <div className="flex items-center gap-2">
          {/* Mobile Search Button (Search bar hide aavumbol) */}
          <button className="md:hidden w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full transition">
             <Search size={18} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-sm">
            <Plus size={18} />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full transition relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
          </button>
        </div>

        <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>

        {/* Profile Info */}
        <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition border border-transparent hover:border-gray-100">
          <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-sm shadow-sm">
            T
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-gray-700 leading-tight">travelhope admin</p>
            <p className="text-[10px] text-gray-500 font-medium">Client Admin</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
        </div>
        
      </div>
    </header>
  );
}