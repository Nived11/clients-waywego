"use client";

import { 
  Building2, Globe, Mail, MessageSquare, MessageCircle, 
  ShieldCheck, Users, Users2, Target, Clock, FileText, 
  CalendarCheck, CreditCard, Bell, Plug, Database, Lock 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SettingsInnerSidebarProps {
  onCloseMobile?: () => void;
}

export default function SettingsInnerSidebar({ onCloseMobile }: SettingsInnerSidebarProps) {
  const pathname = usePathname();

  const sections = [
    {
      title: "GENERAL",
      items: [
        { id: "company-profile", label: "Company Profile", icon: Building2 },
        { id: "localization", label: "Localization", icon: Globe },
        { id: "email-settings", label: "Email Settings", icon: Mail },
        { id: "sms-settings", label: "SMS Settings", icon: MessageSquare },
        { id: "whatsapp-settings", label: "WhatsApp Settings", icon: MessageCircle },
      ]
    },
    {
      title: "SYSTEM",
      items: [
        { id: "roles-permissions", label: "Roles & Permissions", icon: ShieldCheck },
        { id: "users", label: "Users", icon: Users },
        { id: "teams", label: "Teams", icon: Users2 },
      ]
    },
    {
      title: "BUSINESS",
      items: [
        { id: "leads-settings", label: "Leads Settings", icon: Target },
        { id: "followup-settings", label: "Follow-up Settings", icon: Clock },
        { id: "quotation-settings", label: "Quotation Settings", icon: FileText },
        { id: "booking-settings", label: "Booking Settings", icon: CalendarCheck },
        { id: "payment-settings", label: "Payment Settings", icon: CreditCard },
      ]
    },
    {
      title: "OTHERS",
      items: [
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "integrations", label: "Integrations", icon: Plug },
        { id: "backup-restore", label: "Backup & Restore", icon: Database },
        { id: "security", label: "Security", icon: Lock },
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 overflow-y-auto max-h-full  
      [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-500">
      
      {sections.map((section, sIdx) => (
        <div key={sIdx} className="mb-6 last:mb-0">
          <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-wider mb-2 pl-2">
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const href = `/settings/${item.id}`;
              const isActive = pathname.includes(item.id);
              
              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    onClick={() => {
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[11px] font-bold transition-colors ${
                      isActive 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <item.icon size={15} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-blue-600" : "text-gray-800"} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}