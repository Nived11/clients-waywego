import { Calendar, ChevronDown, ClipboardList, FileText, Clock, CalendarCheck, Users } from "lucide-react";
import StatCard from "./components/StatCard";
import AttentionRequired from "./components/AttentionRequired";
import EnquiryPipeline from "./components/EnquiryPipeline";
import QuotationPerformance from "./components/QuotationPerformance";
// Puthiya imports
import TodaysFollowUps from "./components/TodaysFollowUps";
import RecentEnquiries from "./components/RecentEnquiries";
import RecentQuotations from "./components/RecentQuotations";
import QuickActions from "./components/QuickActions";
import UpcomingDepartures from "./components/UpcomingDepartures";
import PaymentsOverview from "./components/PaymentsOverview";

export const DashboardMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Welcome back,</p>
          <h1 className="text-2xl font-bold text-gray-800 capitalize flex items-center gap-2">
            {tenantName} Admin <span className="text-xl">👋</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            <span>20 May 2025, Tuesday</span>
            <Calendar size={16} className="text-gray-400 ml-2" />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            <span>Custom Range</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* 2. Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="New Enquiries" value="18" change="12%" changeText="from yesterday" isPositive={true} icon={ClipboardList} iconColor="text-blue-600" iconBg="bg-blue-50" />
        <StatCard title="Quotations Created" value="11" change="8%" changeText="from yesterday" isPositive={true} icon={FileText} iconColor="text-emerald-600" iconBg="bg-emerald-50" />
        <StatCard title="Follow-ups Due" value="23" change="15%" changeText="from yesterday" isPositive={true} icon={Clock} iconColor="text-purple-600" iconBg="bg-purple-50" />
        <StatCard title="Confirmed Bookings" value="4" change="20%" changeText="from yesterday" isPositive={false} icon={CalendarCheck} iconColor="text-orange-500" iconBg="bg-orange-50" />
        <StatCard title="Quotation Value" value="₹6.85L" change="18%" changeText="this month" isPositive={true} icon={Users} iconColor="text-pink-600" iconBg="bg-pink-50" />
      </div>

      {/* 3. Middle Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3"><AttentionRequired /></div>
        <div className="lg:col-span-6"><EnquiryPipeline /></div>
        <div className="lg:col-span-3"><QuotationPerformance /></div>
      </div>

      {/* 4. Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><TodaysFollowUps /></div>
        <div className="lg:col-span-4"><RecentEnquiries /></div>
        <div className="lg:col-span-4"><RecentQuotations /></div>
      </div>

      {/* 5. Bottom Actions & Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><QuickActions /></div>
        <div className="lg:col-span-4"><UpcomingDepartures /></div>
        <div className="lg:col-span-4"><PaymentsOverview /></div>
      </div>
    </div>
  );
};