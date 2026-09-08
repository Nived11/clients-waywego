"use client";

import { 
  ArrowLeft, UploadCloud, Calendar as CalendarIcon, 
  MapPin, Check, ChevronRight, Settings, Users, Layers, 
  CarFront, Fuel, Lightbulb
} from "lucide-react";
import Link from "next/link";

interface VehicleFormProps {
  isEditMode?: boolean; 
}

export default function VehicleForm({ isEditMode = false }: VehicleFormProps) {
  
  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/vehicles" className="text-blue-600 cursor-pointer hover:underline">
              Vehicles
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit Vehicle' : 'Add New Vehicle'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">
            {isEditMode ? 'Edit Vehicle' : 'Add New Vehicle'}
          </h1>
          <p className="text-gray-500 text-xs font-medium mt-1">
            {isEditMode ? 'Update vehicle details, documents and other information.' : 'Add vehicle details, documents and other information.'}
          </p>
        </div>
        
        <Link 
          href="/vehicles" 
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Vehicles
        </Link>
      </div>

      {/* Form Layout - 2 Columns */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* LEFT COLUMN: Main Form Elements */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* 1. Basic Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">1</div>
              <h2 className="text-sm font-bold text-gray-800">Basic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Vehicle Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Toyota Innova Crysta" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Registration Number <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. KL 07 CP 1234" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Vehicle Type <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select vehicle type</option>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Tempo Traveller</option>
                  <option>Mini Bus</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Fuel Type <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select fuel type</option>
                  <option>Diesel</option>
                  <option>Petrol</option>
                  <option>EV</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Transmission</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select transmission</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Model / Variant</label>
                <input type="text" placeholder="e.g. Innova Crysta 2.4 ZX" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Color</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select color</option>
                  <option>White</option>
                  <option>Silver</option>
                  <option>Black</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Manufacturing Year <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" placeholder="Select year" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-9 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none cursor-pointer" />
                  <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Insurance Expiry Date</label>
                <div className="relative">
                  <input type="text" placeholder="Select date" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-9 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none cursor-pointer" />
                  <CalendarIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Capacity & Features */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">2</div>
              <h2 className="text-sm font-bold text-gray-800">Capacity & Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Seating Capacity <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. 7 + 1" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Luggage Capacity</label>
                <input type="text" placeholder="e.g. 2 Large Bags" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">No. of Doors</label>
                <input type="number" placeholder="e.g. 5" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Air Conditioning</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select AC type</option>
                  <option>AC</option>
                  <option>Non-AC</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Entertainment System</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select option</option>
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Vehicle Features</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select features</option>
                  <option>Push Back Seats</option>
                  <option>USB Charging</option>
                </select>
                <p className="text-[9px] text-gray-400 font-medium mt-1">You can select multiple options</p>
              </div>
            </div>
          </div>

          {/* 3. Location & Status */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">3</div>
              <h2 className="text-sm font-bold text-gray-800">Location & Status</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Current Location <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select location</option>
                  <option>Kochi</option>
                  <option>Alleppey</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Availability Status <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select status</option>
                  <option>Active</option>
                  <option>Maintenance</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Assign Driver <span className="text-gray-400 font-medium">(Optional)</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white cursor-pointer">
                  <option value="">Select driver</option>
                  <option>John Doe</option>
                  <option>Rakesh</option>
                </select>
              </div>
            </div>
          </div>

          {/* 4. Documents & Images */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">4</div>
              <h2 className="text-sm font-bold text-gray-800">Documents & Images</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Vehicle Images <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors h-[120px]">
                  <UploadCloud size={24} className="text-blue-500 mb-2" />
                  <p className="text-[10px] font-bold text-gray-700">Click to upload or drag and drop</p>
                  <p className="mt-1 text-[9px] text-gray-400 font-medium">JPG, PNG, WebP (Max 2MB each)</p>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Documents</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="border border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors h-[120px]">
                    <UploadCloud size={20} className="text-blue-500 mb-2" />
                    <p className="text-[10px] font-bold text-gray-700">Upload RC Book (Front)</p>
                    <p className="mt-1 text-[9px] text-gray-400 font-medium">JPG, PNG, PDF (Max 2MB)</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors h-[120px]">
                    <UploadCloud size={20} className="text-blue-500 mb-2" />
                    <p className="text-[10px] font-bold text-gray-700">Upload Insurance</p>
                    <p className="mt-1 text-[9px] text-gray-400 font-medium">JPG, PNG, PDF (Max 2MB)</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors h-[120px]">
                    <UploadCloud size={20} className="text-blue-500 mb-2" />
                    <p className="text-[10px] font-bold text-gray-700">Upload PUC Certificate</p>
                    <p className="mt-1 text-[9px] text-gray-400 font-medium">JPG, PNG, PDF (Max 2MB)</p>
                  </div>
                </div>
                <p className="text-[9px] text-gray-400 font-medium mt-1.5">You can upload up to 5 files (Max 2MB each)</p>
              </div>
            </div>
          </div>

          {/* 5. Additional Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">5</div>
              <h2 className="text-sm font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="flex flex-col">
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Remarks <span className="text-gray-400 font-medium">(Optional)</span></label>
              <textarea 
                placeholder="Enter any additional information about this vehicle..." 
                className="w-full flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400 h-24"
              ></textarea>
              <div className="flex justify-end mt-1.5">
                <p className="text-[9px] text-gray-400 font-medium">0 / 500 characters</p>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Link href="/vehicles" className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer">
               Cancel
            </Link>
            <button className="px-5 py-2.5 rounded-lg border border-blue-100 text-blue-600 bg-blue-50 text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer shadow-sm">
               Save as Draft
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5">
               Save Vehicle
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* 1. Preview Card */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-1">Preview</h3>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your vehicle card will look.</p>
            
            <div className="w-full border border-gray-100 rounded-xl overflow-hidden shadow-sm p-3">
              <div className="flex items-center justify-center mb-4">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop" alt="Preview" className="w-full h-32 object-cover rounded-lg" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="w-fit px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded">Active</span>
                
                <div className="flex items-start justify-between gap-2 mt-1">
                  <h4 className="font-bold text-gray-800 text-[13px] leading-tight">Toyota Innova Crysta</h4>
                  <span className="text-[10px] font-bold text-gray-600 shrink-0 mt-0.5">KL 07 CP 1234</span>
                </div>

                <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-medium text-gray-500 mt-2">
                  <div className="flex items-center gap-1"><CarFront size={12} className="text-gray-400" /> SUV</div>
                  <div className="flex items-center gap-1"><Fuel size={12} className="text-gray-400" /> Diesel</div>
                  <div className="flex items-center gap-1"><Users size={12} className="text-gray-400" /> 7 + 1 Seats</div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500 mt-1">
                  <MapPin size={12} className="text-gray-400" /> Kochi, Kerala
                </div>
              </div>
            </div>
          </div>

          {/* 2. Helpful Tips */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
               <Lightbulb size={14} className="text-blue-600" /> Helpful Tips
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Add clear images of the vehicle for better visibility.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Keep insurance and PUC documents updated.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Provide accurate seating and luggage capacity.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Vehicle will be visible to all users based on status.
              </li>
            </ul>
          </div>

          {/* 3. Quick Actions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Settings size={14} className="text-gray-500 group-hover:text-blue-500" /> Manage Vehicle Types
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Users size={14} className="text-gray-500 group-hover:text-blue-500" /> Manage Drivers
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Layers size={14} className="text-gray-500 group-hover:text-blue-500" /> Bulk Update Vehicles
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}