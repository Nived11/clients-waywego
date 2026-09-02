// dashboard/DashboardMain.tsx
"use client";

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

import { useDashboard } from "./hooks/useDashboard";
import DashboardSkeleton from "./components/DashboardSkeleton";
import DashboardError from "./components/DashboardError";

export const DashboardMain = ({ tenantName }: { tenantName: string }) => {
  const { data, loading, error, refetch } = useDashboard();

  if (loading) return <DashboardSkeleton />;
  if (error) return <DashboardError error={error} onRetry={refetch} />;

  // പുതിയ JSON Structure അനുസരിച്ച് ഡാറ്റ ഡീസ്ട്രക്ചർ ചെയ്യുന്നു
  const { 
    tenant, kpi_cards, attention_required, enquiry_pipeline, 
    quotation_performance, todays_followups, recent_enquiries, 
    recent_quotations, upcoming_departures, payments_overview 
  } = data;

  // Change text സ്പ്ലിറ്റ് ചെയ്യാനുള്ള ചെറിയ ഫംഗ്ഷൻ
  const parseChange = (text: string) => {
    if (!text) return { val: "", desc: "" };
    const parts = text.split(" ");
    return { val: parts[0], desc: parts.slice(1).join(" ") };
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Welcome back,</p>
          <h1 className="text-2xl font-bold text-gray-800 capitalize flex items-center gap-2">
            {tenant?.company_name || tenantName} <span className="text-xl">👋</span>
          </h1>
        </div>
        
        {/* മൊബൈലിൽ ഒരൊറ്റ വരിയിൽ വരാൻ flex-row, w-full, flex-1 എന്നിവ നൽകി */}
        <div className="flex flex-row items-center justify-between md:justify-end gap-2 sm:gap-3 w-full md:w-auto mt-2 md:mt-0">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-white border border-gray-200 text-gray-700 px-2 sm:px-4 py-2 rounded-lg text-[11px] sm:text-sm font-bold hover:bg-gray-50 transition shadow-sm whitespace-nowrap">
            <span>{tenant?.current_date || "Today"}</span>
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 ml-1 sm:ml-2" strokeWidth={2.5} />
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-white border border-gray-200 text-gray-700 px-2 sm:px-4 py-2 rounded-lg text-[11px] sm:text-sm font-bold hover:bg-gray-50 transition shadow-sm whitespace-nowrap">
            <span>Custom Range</span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
        <StatCard title="New Enquiries" value={kpi_cards?.new_enquiries?.count} change={parseChange(kpi_cards?.new_enquiries?.change_text).val} changeText={parseChange(kpi_cards?.new_enquiries?.change_text).desc} isPositive={kpi_cards?.new_enquiries?.trend === 'up'} icon={ClipboardList} iconColor="text-blue-600" iconBg="bg-blue-50" />
        <StatCard title="Quotations Created" value={kpi_cards?.quotations_created?.count} change={parseChange(kpi_cards?.quotations_created?.change_text).val} changeText={parseChange(kpi_cards?.quotations_created?.change_text).desc} isPositive={kpi_cards?.quotations_created?.trend === 'up'} icon={FileText} iconColor="text-emerald-600" iconBg="bg-emerald-50" />
        <StatCard title="Follow-ups Due" value={kpi_cards?.followups_due?.count} change={parseChange(kpi_cards?.followups_due?.change_text).val} changeText={parseChange(kpi_cards?.followups_due?.change_text).desc} isPositive={kpi_cards?.followups_due?.trend === 'up'} icon={Clock} iconColor="text-purple-600" iconBg="bg-purple-50" />
        <StatCard title="Confirmed Bookings" value={kpi_cards?.confirmed_bookings?.count} change={parseChange(kpi_cards?.confirmed_bookings?.change_text).val} changeText={parseChange(kpi_cards?.confirmed_bookings?.change_text).desc} isPositive={kpi_cards?.confirmed_bookings?.trend === 'up'} icon={CalendarCheck} iconColor="text-orange-500" iconBg="bg-orange-50" />
        <StatCard title="Quotation Value" value={kpi_cards?.quotation_value?.formatted} change={parseChange(kpi_cards?.quotation_value?.change_text).val} changeText={parseChange(kpi_cards?.quotation_value?.change_text).desc} isPositive={kpi_cards?.quotation_value?.trend === 'up'} icon={Users} iconColor="text-pink-600" iconBg="bg-pink-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3"><AttentionRequired data={attention_required} /></div>
        <div className="lg:col-span-6"><EnquiryPipeline data={enquiry_pipeline} /></div>
        <div className="lg:col-span-3"><QuotationPerformance data={quotation_performance} /></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><TodaysFollowUps followups={todays_followups} /></div>
        <div className="lg:col-span-4"><RecentEnquiries queries={recent_enquiries} /></div>
        <div className="lg:col-span-4"><RecentQuotations quotations={recent_quotations} /></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4"><QuickActions /></div>
        <div className="lg:col-span-4"><UpcomingDepartures departures={upcoming_departures} /></div>
        <div className="lg:col-span-4"><PaymentsOverview data={payments_overview} /></div>
      </div>

      {/* Responsive Footer */}
      <div className="pt-6 mt-8 border-t border-gray-200">
        
        {/* Desktop View */}
        <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 font-medium">
          <p>Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">Last updated: Just now <span className="text-base leading-none">⟳</span></p>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col sm:hidden text-[11px] text-gray-500 font-medium gap-3">
          <div className="flex justify-between items-center w-full">
            <p>Way We Go CRM</p>
            <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">Last updated: Just now <span className="text-base leading-none">⟳</span></p>
          </div>
          <div className="text-center w-full">
            <p>Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          </div>
        </div>

      </div>

    </div>
  );
};