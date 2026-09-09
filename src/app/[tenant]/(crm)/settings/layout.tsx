"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SettingsInnerSidebar from "@/components/layout/SettingsInnerSidebar"; // പാത്ത് കറക്റ്റ് ആണെന്ന് ഉറപ്പാക്കുക

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5 md:gap-6 w-full max-w-[1600px] mx-auto pb-6 relative">
      
      {/* 1. Header with Mobile Toggle */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu (Visible only on mobile/tablet) */}
          <button 
            className="xl:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
          
          <div>
            <h1 className="text-xl md:text-2xl font-black text-[#1e3a5f]">Settings</h1>
            <p className="hidden sm:block text-gray-600 text-[12px] md:text-[13px] font-medium mt-0.5">
              Manage your system preferences and application configuration.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Layout Structure */}
      <div className="flex flex-col xl:flex-row gap-6 items-start relative">
        
        {/* Mobile Overlay Background */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-[#111827]/40 backdrop-blur-sm z-[40] xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* LEFT: Inner Settings Sidebar */}
        <div className={`
          fixed xl:static inset-y-0 left-0 z-[50] w-[230px] shrink-0 h-full xl:h-auto
          transform transition-transform duration-300 ease-in-out xl:transform-none xl:top-6
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
        `}>
          {/* Mobile Sidebar Container */}
          <div className="h-full w-full bg-white xl:bg-transparent shadow-2xl xl:shadow-none p-4 xl:p-0 flex flex-col">
            
            {/* Close button inside mobile sidebar */}
            <div className="flex justify-between items-center xl:hidden mb-4 pb-4 border-b border-gray-100">
              <h2 className="text-[13px] font-bold text-gray-800">Settings Menu</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-gray-500 hover:bg-gray-100 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-hidden">
              <SettingsInnerSidebar onCloseMobile={() => setIsMobileMenuOpen(false)} />
            </div>

          </div>
        </div>

        {/* RIGHT: Dynamic Content Area (Middle Content + Right Sidebar) */}
        <div className="flex-1 w-full min-w-0">
          {children}
        </div>

      </div>

      {/* 3. Footer */}
      <div className="pt-6 mt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500 font-medium">
          <p>© 2026 Travel Hope Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}