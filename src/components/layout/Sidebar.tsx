"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Home, Users, MessageSquare, CalendarClock, Map, Briefcase, 
  Building2, Ship, Car, FileText, CalendarCheck, CreditCard, 
  BarChart2, Activity, Package, MapPin, Shield, ChevronDown, Zap, X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  
  // Tooltip kanikkan vendiyulla state (perum, exact position-um)
  const [hoveredTooltip, setHoveredTooltip] = useState<{name: string, top: number} | null>(null);

  const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Leads", icon: Users, href: "/leads" },
    { name: "Queries", icon: MessageSquare, href: "/queries" },
    { name: "Today's Follow-ups", icon: CalendarClock, href: "/follow-ups" },
    { name: "Destinations", icon: Map, href: "/destinations" },
    { name: "Suppliers", icon: Briefcase, href: "/suppliers" },
    { name: "Hotels", icon: Building2, href: "/hotels" },
    { name: "Houseboats", icon: Ship, href: "/houseboats" },
    { name: "Vehicles", icon: Car, href: "/vehicles" },
    { name: "Quotations", icon: FileText, href: "/quotations" },
    { name: "Bookings", icon: CalendarCheck, href: "/bookings" },
    { name: "Payments", icon: CreditCard, href: "/payments" },
    { name: "Reports", icon: BarChart2, href: "/reports" },
    { name: "Activities", icon: Activity, href: "/activities" },
    { name: "Package Templates", icon: Package, href: "/templates" },
    { name: "Itinerary Builder", icon: MapPin, href: "/itinerary" },
    { name: "Team & Permissions", icon: Shield, href: "/team" },
  ];

  // Mobile-l (width < 1024px) oru link click cheythal sidebar close cheyyan ulla function
  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          bg-[#111827] text-gray-300 flex flex-col h-screen text-sm transition-all duration-300 ease-in-out
          ${isOpen ? "w-[240px] translate-x-0" : "w-[70px] -translate-x-full lg:translate-x-0"}
        `}
      >
        
        {/* Top Logo Area */}
        <div className="h-16 flex items-center justify-center relative z-20 bg-[#111827] border-b border-gray-800 shrink-0">
          {isOpen ? (
            <div className="relative w-full h-full flex items-center justify-between px-4">
              <Image 
                src="/travel_hope.png" 
                alt="Travel Hope Logo" 
                width={140} 
                height={40} 
                className="object-contain"
                priority 
              />
              <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
          )}
        </div>

        {/* Workspace Switcher */}
        <div className={`px-4 py-3 mb-2 cursor-pointer hover:bg-gray-800 transition mx-2 mt-2 rounded-lg flex items-center shrink-0 z-20 bg-[#111827] ${isOpen ? 'justify-between' : 'justify-center'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0">
              T
            </div>
            {isOpen && (
              <div className="whitespace-nowrap overflow-hidden">
                <h3 className="text-white font-semibold text-sm truncate">Travel Hope Pvt Ltd</h3>
                <p className="text-[10px] text-gray-400">Tenant Workspace</p>
              </div>
            )}
          </div>
          {isOpen && <ChevronDown size={14} className="text-gray-400 shrink-0" />}
        </div>

        {/* Navigation Links - Eppozhum Scrollable aakki vekkanam */}
        <nav 
          className="flex-1 overflow-y-auto overflow-x-hidden px-2 space-y-1 mt-2 pb-4 custom-scrollbar"
          onMouseLeave={() => setHoveredTooltip(null)} // Mouse purathu poyal tooltip pokan
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    // Hover cheyyumbol icon-nte exact 'top' position kandupidikkunnu
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredTooltip({ name: item.name, top: rect.top + rect.height / 2 });
                  }
                }}
              >
                <Link
                  href={item.href}
                  onClick={handleLinkClick} // Mobile click close working here
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive 
                      ? "bg-blue-600 text-white font-medium shadow-md shadow-blue-900/20" 
                      : "hover:bg-gray-800 hover:text-white"
                  } ${!isOpen ? "justify-center relative" : ""}`}
                >
                  <item.icon size={18} className={`shrink-0 ${isActive ? "text-white" : "text-gray-400"}`} />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Quick Actions Bottom Button */}
        <div className="p-4 border-t border-gray-800 relative z-20 bg-[#111827] shrink-0">
          <button className={`w-full flex items-center bg-[#1f2937] hover:bg-gray-700 text-white p-2.5 rounded-lg transition ${isOpen ? 'justify-between px-4' : 'justify-center'}`}>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-blue-400 shrink-0" />
              {isOpen && <span>Quick Actions</span>}
            </div>
            {isOpen && <ChevronDown size={14} className="text-gray-400 -rotate-90 shrink-0" />}
          </button>
        </div>

        {/* ======================================= */}
        {/* MAGIC TRICK: Render Tooltip outside the scroll area! */}
        {/* ======================================= */}
        {!isOpen && hoveredTooltip && (
          <div 
            className="fixed z-[100] flex items-center pointer-events-none transition-all duration-75"
            style={{ 
              top: `${hoveredTooltip.top}px`, 
              left: '70px', // Sidebar-nte width (70px) kazhinju thudangaan
              transform: 'translateY(-50%)' // Exact center-l nilkkan
            }}
          >
            {/* Tooltip arrow (Blue) */}
            <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-blue-600 absolute -left-1"></div>
            {/* Tooltip body (Blue bg, White text) */}
            <div className="bg-blue-600 text-white font-medium text-[11px] uppercase px-3 py-1.5 rounded-md shadow-lg shadow-blue-900/20 whitespace-nowrap tracking-wide">
              {hoveredTooltip.name}
            </div>
          </div>
        )}

      </aside>
    </>
  );
}