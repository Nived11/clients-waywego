"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Plus, Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { useLogout } from "@/features/auth/hooks/useLogout"; // Path correct aakkuka
import { ConfirmModal } from "@/components/ui/ConfirmModal"; // Path correct aakkuka

interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export default function Header({ toggleSidebar, isOpen }: HeaderProps) {
  // State for Dropdown and Modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Custom Hook for logout logic
  const { logout, loading: isLoggingOut } = useLogout();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout Confirm Action
  const handleConfirmLogout = async () => {
    await logout();
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 z-10 shrink-0">
        
        {/* Left: Menu Button */}
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
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

          {/* Profile Dropdown Area */}
          <div className="relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition border border-transparent hover:border-gray-100 select-none"
            >
              <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-sm shadow-sm">
                T
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-gray-700 leading-tight">travelhope admin</p>
                <p className="text-[10px] text-gray-500 font-medium">Client Admin</p>
              </div>
              <ChevronDown size={14} className={`text-gray-400 hidden sm:block transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* Mobile only info inside dropdown */}
                <div className="sm:hidden px-4 py-3 border-b border-gray-100 mb-1">
                  <p className="text-sm font-semibold text-gray-700">travelhope admin</p>
                  <p className="text-[10px] text-gray-500">Client Admin</p>
                </div>

                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                  <User size={16} className="text-gray-400" />
                  My Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                  <Settings size={16} className="text-gray-400" />
                  Settings
                </button>
                
                <div className="h-px bg-gray-100 my-1"></div>
                
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsLogoutModalOpen(true);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                >
                  <LogOut size={16} />
                  Log Out
                </button>
              </div>
            )}
          </div>
          
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <ConfirmModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out of your account? "
        confirmText="Log Out"
        cancelText="Cancel"
        isDanger={true}
        isLoading={isLoggingOut}
      />
    </>
  );
}