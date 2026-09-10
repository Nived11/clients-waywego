"use client";

import HelpHero from "./components/HelpHero";
import HelpTopics from "./components/HelpTopics";
import HelpVideos from "./components/HelpVideos";
import HelpFAQ from "./components//HelpFAQ";
import HelpSidebar from "./components/HelpSidebar";

export const HelpMain = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">Need Help?</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Find answers, learn how to use the system, or get in touch with our support team.</p>
        </div>
      </div>

      {/* Main Layout (2 Columns) */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <HelpHero />
          <HelpTopics />
          
          {/* Videos & FAQ Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HelpVideos />
            <HelpFAQ />
          </div>
        </div>

        {/* ================= RIGHT COLUMN (Sidebar) ================= */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
          <HelpSidebar />
        </div>

      </div>

      {/* Footer */}
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
};