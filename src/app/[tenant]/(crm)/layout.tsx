"use client"; // State use cheyyunnathu kondu ithu client component aakkanam

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sidebar open aano closed aano ennu ariyaan ulla state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar - State pass cheyyunnu */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header - Toggle function pass cheyyunnu */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isOpen={isSidebarOpen} />
        
        {/* Page Content */}
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-slate-50">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}