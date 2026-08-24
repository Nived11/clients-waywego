"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, Users, MessageSquare, CalendarClock, Map, Briefcase, 
  Building2, Ship, Car, FileText, CalendarCheck, CreditCard, 
  BarChart2, Activity, Package, MapPin, Shield, ChevronDown, Zap
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname(); // Ippo ethu page-ilanu ullathu ennu kandupidikkan

  // Nammukku vendi URL paths koodi add cheyyam
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

  return (
    <aside className="w-[240px] bg-[#111827] text-gray-300 flex flex-col h-screen overflow-hidden text-sm">
      {/* Top Blue Logo Area */}
      <div className="h-16 bg-[#0ea5e9] m-4 rounded-md mb-2 flex items-center justify-center">
         {/* Logo image can go here */}
      </div>

      {/* Workspace Switcher */}
      <div className="px-4 py-3 mb-2 cursor-pointer hover:bg-gray-800 transition mx-2 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-yellow-500 text-black font-bold flex items-center justify-center">
            T
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Travel Hope Pvt Ltd</h3>
            <p className="text-xs text-gray-400">Tenant Workspace</p>
          </div>
        </div>
        <ChevronDown size={16} className="text-gray-400" />
      </div>

      {/* Navigation Links - Scrollable */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar pb-4">
        {navItems.map((item, index) => {
          // Ithu current page aano ennu check cheyyunnu
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? "bg-blue-600 text-white font-medium shadow-md shadow-blue-900/20" 
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon size={18} className={isActive ? "text-white" : "text-gray-400"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Quick Actions Bottom Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-between bg-[#1f2937] hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg transition">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-blue-400" />
            <span>Quick Actions</span>
          </div>
          <ChevronDown size={16} className="text-gray-400 -rotate-90" />
        </button>
      </div>
    </aside>
  );
}