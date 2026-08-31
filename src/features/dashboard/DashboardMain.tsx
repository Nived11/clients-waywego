// dashboard/DashboardMain.tsx
"use client"; // Hook ഉപയോഗിക്കുന്നതിനാൽ ഇത് ക്ലയൻ്റ് കമ്പോണൻ്റ് ആക്കണം

import { Calendar, ChevronDown, ClipboardList, FileText, Clock, CalendarCheck, Users } from "lucide-react";
import StatCard from "./components/StatCard";
import AttentionRequired from "./components/AttentionRequired";
import EnquiryPipeline from "./components/EnquiryPipeline";
import QuotationPerformance from "./components/QuotationPerformance";
import TodaysFollowUps from "./components/TodaysFollowUps";
import RecentEnquiries from "./components/RecentEnquiries";
import RecentQuotations from "./components/RecentQuotations";
import QuickActions from "./components/QuickActions";
import UpcomingDepartures from "./components/UpcomingDepartures";
import PaymentsOverview from "./components/PaymentsOverview";

// നമ്മൾ ഉണ്ടാക്കിയ പുതിയ ഫയലുകൾ ഇംപോർട്ട് ചെയ്യുന്നു
import { useDashboard } from "./hooks/useDashboard";
import DashboardSkeleton from "./components/DashboardSkeleton";
import DashboardError from "./components/DashboardError";

export const DashboardMain = ({ tenantName }: { tenantName: string }) => {
  // Custom hook വിളിക്കുന്നു
  const { data, loading, error, refetch } = useDashboard();

  // Loading സ്റ്റേറ്റ്
  if (loading) return <DashboardSkeleton />;

  // Error സ്റ്റേറ്റ്
  if (error) return <DashboardError error={error} onRetry={refetch} />;

  // API ൽ നിന്ന് ഡാറ്റ എടുക്കുന്നു
  const { tenant, metrics, recent_queries } = data;

  // ഇന്നത്തെ തിയ്യതി ഫോർമാറ്റ് ചെയ്യാൻ
  const today = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' 
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Welcome back,</p>
          <h1 className="text-2xl font-bold text-gray-800 capitalize flex items-center gap-2">
            {tenant?.company_name || tenantName} Admin <span className="text-xl">👋</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            <span>{today}</span>
            <Calendar size={16} className="text-gray-400 ml-2" />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            <span>Custom Range</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* 2. Top Stat Cards Grid (Dynamic Data) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Queries" value={metrics?.total_queries?.toString() || "0"} change="New" changeText="in pipeline" isPositive={true} icon={ClipboardList} iconColor="text-blue-600" iconBg="bg-blue-50" />
        <StatCard title="Total Itineraries" value={metrics?.total_itineraries?.toString() || "0"} change="Active" changeText="this month" isPositive={true} icon={FileText} iconColor="text-emerald-600" iconBg="bg-emerald-50" />
        <StatCard title="Today's Follow-ups" value={metrics?.today_followups?.toString() || "0"} change="Pending" changeText="for today" isPositive={false} icon={Clock} iconColor="text-purple-600" iconBg="bg-purple-50" />
        <StatCard title="Confirmed Bookings" value={metrics?.confirmed_itineraries?.toString() || "0"} change="Success" changeText="overall" isPositive={true} icon={CalendarCheck} iconColor="text-orange-500" iconBg="bg-orange-50" />
        <StatCard title="Total Staff" value={metrics?.staff_count?.toString() || "0"} change="Active" changeText="members" isPositive={true} icon={Users} iconColor="text-pink-600" iconBg="bg-pink-50" />
      </div>

      {/* 3. Middle Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3"><AttentionRequired /></div>
        <div className="lg:col-span-6"><EnquiryPipeline data={metrics?.queries_by_status} /></div>
        <div className="lg:col-span-3"><QuotationPerformance /></div>
      </div>

      {/* 4. Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><TodaysFollowUps /></div>
        <div className="lg:col-span-4"><RecentEnquiries queries={recent_queries} /></div>
        <div className="lg:col-span-4"><RecentQuotations /></div>
      </div>

      {/* 5. Bottom Actions & Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><QuickActions /></div>
        <div className="lg:col-span-4"><UpcomingDepartures /></div>
        <div className="lg:col-span-4"><PaymentsOverview /></div>
      </div>

       {/* Global Footer */}
       <div className="flex justify-between items-center pt-6 mt-8 border-t border-gray-200 text-xs text-gray-500 font-medium">
         <p>
           Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span>
         </p>
         <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">
           Last updated: Just now <span className="text-base leading-none">⟳</span>
         </p>
       </div>
          
    </div>
  );
};