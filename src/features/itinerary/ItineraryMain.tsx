"use client";

import { ArrowLeft } from "lucide-react";
import { DayListSidebar } from "./components/DayListSidebar";
import { DayDetailEditor } from "./components/DayDetailEditor";
import { BuilderWidgets } from "./components/BuilderWidgets";
import { BuilderStats } from "./components/BuilderStats";

export const ItineraryMain = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="bg-slate-50 flex flex-col h-full min-h-full">
      
      {/* Top Header */}
      <div className=" py-4 md:py-5  border-b border-slate-200 shrink-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
          <div className="flex-1">
            <div className="text-[11px] md:text-xs text-slate-500 mb-1">Dashboard &rsaquo; <span className="text-slate-800">Itinerary Builder</span></div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">Itinerary Builder</h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Create detailed day wise itineraries for your packages.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors w-full md:w-auto shrink-0 shadow-sm">
            <ArrowLeft size={16} /> Back to Templates
          </button>
        </div>

        {/* Template Info Card */}
        <BuilderStats />
      </div>

      {/* Main Builder Grid */}
      <div className="w-full max-w-[1600px] mx-auto py-6 flex-1  pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start h-full">
          
          {/* Left: Day List */}
          <div className="lg:col-span-3 w-full">
            <DayListSidebar />
          </div>
          
          {/* Middle: Editor */}
          <div className="lg:col-span-6 w-full">
            <DayDetailEditor />
          </div>
          
          {/* Right: Widgets (Ippo mobile-lum kaanam!) */}
          <div className="lg:col-span-3 w-full">
            <BuilderWidgets />
          </div>
          
        </div>
      </div>

      {/* STICKY Bottom Bar */}
      <div className="sticky bottom-0 w-full z-50 pointer-events-none mt-auto">
        <div className="w-full max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 md:px-6">

            {/* Left + Middle Columns (3 + 6 = 9) */}
            <div className="col-span-1 lg:col-span-9 bg-white border-t border-slate-200 shadow-[0_-4px_15px_rgba(0,0,0,0.05)] pointer-events-auto flex gap-2 sm:gap-4 justify-between sm:justify-end py-3 md:py-4 px-4 md:px-6 -mx-4 md:-mx-6 lg:mx-0 lg:-ml-6 lg:pl-6 rounded-xl lg:rounded-lg">
              <button className="flex-1 sm:flex-none px-2 sm:px-6 py-2 md:py-2.5 rounded-lg font-medium text-[11px] sm:text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 text-center transition-colors whitespace-nowrap">
                Cancel
              </button>
              <button className="flex-1 sm:flex-none px-2 sm:px-6 py-2 md:py-2.5 rounded-lg font-medium text-[11px] sm:text-sm text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 text-center transition-colors whitespace-nowrap">
                Save Draft
              </button>
              <button className="flex-[1.2] sm:flex-none px-3 sm:px-8 py-2 md:py-2.5 rounded-lg font-medium text-[11px] sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm text-center transition-colors whitespace-nowrap">
                Save Itinerary
              </button>
            </div>

            {/* Right Column Spacer */}
            <div className="hidden lg:block lg:col-span-3"></div>

          </div>
        </div>
      </div>

    </div>
  );
};