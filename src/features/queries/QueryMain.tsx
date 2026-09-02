"use client";

import { useState } from "react";
import { Calendar, Download, ChevronDown, FileText, FileSpreadsheet, File } from "lucide-react";
import QueryStats from "./components/QueryStats";
import QueryFilters from "./components/QueryFilters";
import QueryTable from "./components/QueryTable";
import QuerySidebar from "./components/QuerySidebar";
import AddQueryForm from "./components/AddQueryForm";

export const QueryMain = ({ tenantName }: { tenantName: string }) => {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isAddQueryOpen, setIsAddQueryOpen] = useState(false);

  return (
    <>
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Queries</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all travel enquiries and assignments in one place.</p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Date Button with Calendar Dropdown UI */}
          <div className="relative">
            <button 
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              onBlur={() => setTimeout(() => setIsCalendarOpen(false), 200)}
              className="flex items-center gap-1.5 sm:gap-2.5 bg-white border border-gray-200 text-gray-800 px-2.5 sm:px-4 py-2 rounded-lg text-[11px] sm:text-sm font-bold hover:bg-gray-50 shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>14 May 2025 - 20 May 2025</span>
              <Calendar className="text-slate-600 w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>

            {/* Tailwind Mockup Calendar Popup */}
            {isCalendarOpen && (
              <div 
                className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 p-4 animate-in fade-in slide-in-from-top-2 duration-200 cursor-default"
                onClick={(e) => e.stopPropagation()} 
              >
                {/* Calendar Header */}
                <div className="flex justify-between items-center mb-4 px-1">
                  <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-500 transition-colors">&lt;</button>
                  <span className="text-sm font-bold text-gray-800">May 2025</span>
                  <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-500 transition-colors">&gt;</button>
                </div>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
                  {/* Days */}
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <div key={d} className="font-bold text-gray-600 mb-1">{d}</div>
                  ))}
                  
                  {/* Empty slots for start of month */}
                  <div></div><div></div><div></div><div></div>
                  
                  {/* Dates 1 to 31 */}
                  {Array.from({length: 31}, (_, i) => i + 1).map(date => {
                    const isStart = date === 14;
                    const isEnd = date === 20;
                    const inRange = date > 14 && date < 20;

                    return (
                      <div key={date} className={`relative flex items-center justify-center h-8 
                        ${inRange ? 'bg-blue-50' : ''} 
                        ${isStart ? 'bg-blue-50 rounded-l-lg' : ''} 
                        ${isEnd ? 'bg-blue-50 rounded-r-lg' : ''}
                      `}>
                        <button className={`w-7 h-7 rounded-lg flex items-center justify-center font-medium transition-colors
                          ${(isStart || isEnd) ? 'bg-blue-600 text-white font-bold shadow-sm' : 
                            inRange ? 'text-blue-700 font-bold' : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}>
                          {date}
                        </button>
                      </div>
                    )
                  })}
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end gap-2">
                  <button className="px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 rounded-md transition-colors">Cancel</button>
                  <button className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors">Apply</button>
                </div>
              </div>
            )}
          </div>

          {/* Export Dropdown Button */}
          <div className="relative">
            <button 
              onClick={() => setIsExportOpen(!isExportOpen)}
              onBlur={() => setTimeout(() => setIsExportOpen(false), 200)}
              className="flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 text-gray-800 px-2.5 sm:px-4 py-2 rounded-lg text-[11px] sm:text-sm font-bold hover:bg-gray-50 shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <Download className="text-slate-600 w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
              <span>Export</span>
              <ChevronDown className="text-slate-600 w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>

            {/* Dropdown Menu */}
            {isExportOpen && (
              <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <button className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 transition-colors cursor-pointer">
                  <FileText size={14} className="text-rose-500" /> Export as PDF
                </button>
                <button className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 transition-colors cursor-pointer">
                  <FileSpreadsheet size={14} className="text-emerald-500" /> Export as Excel
                </button>
                <button className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 transition-colors cursor-pointer">
                  <File size={14} className="text-blue-500" /> Export as CSV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Top Row: Stats on the Left, Blank Space on the Right */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <QueryStats />
        </div>
        <div className="hidden xl:block w-full xl:w-[320px] 2xl:w-[340px] shrink-0"></div>
      </div>

      {/* 3. Bottom Row: Filters & Table combined into ONE Card */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Side - Combined Filters & Table without gap */}
        <div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <QueryFilters onOpenAddQuery={() => setIsAddQueryOpen(true)} />
          <QueryTable />
        </div>

        {/* Right Side - Sidebar */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6">
          <QuerySidebar />
        </div>

      </div>

      {/* 4. Footer - Made Responsive */}
      <div className="pt-6 mt-4 border-t border-gray-200">
        
        {/* Desktop View */}
        <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 font-medium">
          <p>Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          <p>Last updated: Just now</p>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col sm:hidden text-[11px] text-gray-500 font-medium gap-3">
          <div className="flex justify-between items-center w-full">
            <p>Way We Go CRM</p>
            <p>Last updated: Just now</p>
          </div>
          <div className="text-center w-full">
            <p>Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span></p>
          </div>
        </div>

      </div>
      
    </div>
    <AddQueryForm 
        isOpen={isAddQueryOpen} 
        onClose={() => setIsAddQueryOpen(false)} 
      />

      </>
  );
};   