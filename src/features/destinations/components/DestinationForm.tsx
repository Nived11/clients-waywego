"use client";

import { 
  ArrowLeft, UploadCloud, Image as ImageIcon, Plus, Check, MapPin, 
  Bold, Italic, Underline, List, Link as LinkIcon, Save, X
} from "lucide-react";
import Link from "next/link"; // Link ഇംപോർട്ട് ചെയ്തു

interface DestinationFormProps {
  isEditMode?: boolean; // Edit ആണോ Add ആണോ എന്ന് തിരിച്ചറിയാൻ
}

export default function DestinationForm({ isEditMode = false }: DestinationFormProps) {
  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            {/* span മാറ്റി Link ആക്കി */}
            <Link href="/destinations" className="text-blue-600 cursor-pointer hover:underline">
              Destinations
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit Destination' : 'Add New Destination'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">
            {isEditMode ? 'Edit Destination' : 'Add New Destination'}
          </h1>
          <p className="text-gray-500 text-xs font-medium mt-1">
            {isEditMode ? 'Update destination details.' : 'Add a new travel destination to showcase in your packages.'}
          </p>
        </div>
        
        {/* button മാറ്റി Link ആക്കി, ശരിയായ href നൽകി */}
        <Link 
          href="/destinations" 
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Destinations
        </Link>
      </div>

      {/* Form Layout - 2 Columns (Left: Main Form, Right: Sidebar) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* LEFT COLUMN: Main Form Elements */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* 1. Destination Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Destination Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Destination Name *</label>
                <input type="text" placeholder="Enter destination name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Slug / URL *</label>
                <input type="text" placeholder="e.g. kerala" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
                <p className="text-[11px] text-gray-500 font-medium mt-1">This will be used in the website URL.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Country *</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select country</option>
                  <option>India</option>
                  <option>UAE</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Region</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select region</option>
                  <option>South India</option>
                  <option>Middle East</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Type *</label>
                <div className="flex items-center gap-3 h-9">
                  <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                    <input type="radio" name="destType" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500" /> State
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                    <input type="radio" name="destType" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500" /> City
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                    <input type="radio" name="destType" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500" defaultChecked /> Country
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                    <input type="radio" name="destType" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500" /> Other
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Short Description *</label>
                <textarea rows={4} placeholder="Enter short description (max 160 characters)" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-500"></textarea>
                <p className="text-[9px] text-gray-500 font-medium mt-1">0 / 160 characters</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Detailed Description *</label>
                <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
                  {/* Rich Text Toolbar Mockup */}
                  <div className="bg-gray-50 border-b border-gray-200 px-2 py-1.5 flex items-center gap-2">
                    <select className="text-xs bg-transparent font-medium text-gray-600 outline-none cursor-pointer">
                      <option>Paragraph</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                    </select>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><Bold size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><Italic size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><Underline size={14} /></button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><List size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><LinkIcon size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600"><ImageIcon size={14} /></button>
                  </div>
                  <textarea rows={4} placeholder="Write detailed description about this destination..." className="w-full text-xs font-medium text-gray-800 px-3 py-2.5 outline-none resize-none placeholder:text-gray-500 border-none"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Images & Media */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Images & Media</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Featured Image *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  <UploadCloud size={28} className="text-blue-500 mb-2" />
                  <p className="text-xs font-bold text-gray-700">Drag & drop image here</p>
                  <p className="text-[10px] text-gray-500 mt-1">or click to browse</p>
                  <div className="mt-3 text-[10px] text-gray-500 font-medium">
                    <p>Recommended size: 1200 x 800px</p>
                    <p>Allowed: JPG, PNG, WEBP (Max 2MB)</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Gallery Images</label>
                <div className="flex-1 border border-gray-200 rounded-xl p-4 flex gap-3 overflow-x-auto items-center">
                  {/* Mock Uploaded Images */}
                  <div className="w-24 h-24 shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <ImageIcon size={20} className="text-gray-300" />
                  </div>
                  <div className="w-24 h-24 shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <ImageIcon size={20} className="text-gray-300" />
                  </div>
                  <div className="w-24 h-24 shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <ImageIcon size={20} className="text-gray-300" />
                  </div>
                  
                  {/* Add More Button */}
                  <button className="w-24 h-24 shrink-0 rounded-lg border-2 border-dashed border-gray-300 text-blue-600 flex flex-col items-center justify-center gap-1 hover:bg-blue-50 transition-colors cursor-pointer">
                    <Plus size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold">Add More</span>
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 font-medium mt-1.5">You can upload up to 10 images (Max 2MB each)</p>
              </div>
            </div>
          </div>

          {/* 3. Additional Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Popular For (Tags)</label>
                <input type="text" placeholder="e.g. Beaches, Mountains, Adventure" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
                <p className="text-[11px] text-gray-500 font-medium mt-1">Add multiple tags separated by comma.</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Best Time to Visit</label>
                <div className="flex items-center gap-2">
                  <select className="flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select start month</option>
                  </select>
                  <span className="text-gray-500">-</span>
                  <select className="flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select end month</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Coordinates (Optional)</label>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Latitude" className="flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
                  <div className="relative flex-1">
                    <input type="text" placeholder="Longitude" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
                    <MapPin size={14} className="text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Display Order</label>
                <input type="number" placeholder="e.g. 1" className="w-full md:w-1/2 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
                <p className="text-[9px] text-gray-500 font-medium mt-1">Lower numbers show first.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Title (SEO)</label>
                <input type="text" placeholder="Enter meta title" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Description (SEO)</label>
                <input type="text" placeholder="Enter meta description" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-500" />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar & Status */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* 1. Destination Status */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Destination Status</h3>
            <label className="block text-[11px] font-bold text-gray-700 mb-2">Status</label>
            <div className="flex items-center gap-3 mb-3">
              <label className="flex-1 flex items-center justify-center gap-2 py-2 border-2 border-emerald-500 bg-emerald-50 rounded-lg cursor-pointer">
                <input type="radio" name="status" defaultChecked className="hidden" />
                <div className="w-3 h-3 rounded-full border-[3px] border-emerald-500 bg-white"></div>
                <span className="text-xs font-bold text-emerald-700">Active</span>
              </label>
              <label className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 bg-gray-50 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors">
                <input type="radio" name="status" className="hidden" />
                <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                <span className="text-xs font-bold text-gray-500">Inactive</span>
              </label>
            </div>
            <p className="text-[10px] text-gray-500 font-medium">Active destinations will be visible in website and packages.</p>
          </div>

          {/* 2. Tips */}
          <div className="bg-blue-50/50 p-5 md:p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
               Tips
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Use a clear and attractive image that represents the destination.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Provide accurate information to help customers.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Add popular tags to improve search and visibility.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Active destinations will be shown in website.
              </li>
            </ul>
          </div>

          {/* 3. Preview Card */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-800">Preview</h3>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your destination card will look.</p>
            
            {/* Card Mockup */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md group">
              <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop" alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-bold text-base mb-1">Destination Name</h4>
                <p className="text-gray-200 text-[10px] font-medium line-clamp-2">Short description of the destination will appear here...</p>
              </div>
            </div>
          </div>

          {/* 4. Action Buttons (Save/Cancel) */}
          <div className="flex items-center justify-end gap-3 mt-2">
            <Link href="/destinations" className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
               Cancel
            </Link>
            <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-2">
              <Save size={14} strokeWidth={2.5} /> Save Destination
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}