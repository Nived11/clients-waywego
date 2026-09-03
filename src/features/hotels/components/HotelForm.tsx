"use client";

import { 
  ArrowLeft, UploadCloud, Image as ImageIcon, Plus, Check, MapPin, 
  Bold, Italic, Underline, List, Link as LinkIcon, Save, X, 
  Star, Clock, Mail, Calendar, BedDouble, Lightbulb
} from "lucide-react";
import Link from "next/link";

interface HotelFormProps {
  isEditMode?: boolean; 
}

export default function HotelForm({ isEditMode = false }: HotelFormProps) {
  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/hotels" className="text-blue-600 cursor-pointer hover:underline">
              Hotels
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit Hotel' : 'Add New Hotel'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">
            {isEditMode ? 'Edit Hotel' : 'Add New Hotel'}
          </h1>
          <p className="text-gray-500 text-xs font-medium mt-1">
            {isEditMode ? 'Update hotel details, amenities and pricing.' : 'Add hotel details, room types, amenities and pricing information.'}
          </p>
        </div>
        
        <Link 
          href="/hotels" 
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Hotels
        </Link>
      </div>

      {/* Form Layout - 2 Columns (Left: Main Form, Right: Sidebar) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* LEFT COLUMN: Main Form Elements */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* 1. Basic Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">1</div>
              <h2 className="text-sm font-bold text-gray-800">Basic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Hotel Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter hotel name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Slug / URL <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. the-leela-palace-delhi" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                <p className="text-[9px] text-gray-400 font-medium mt-1">This will be used in the website URL.</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Hotel Category <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select category</option>
                  <option>Resort</option>
                  <option>Luxury Hotel</option>
                  <option>Boutique</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Star Rating</label>
                <div className="flex items-center gap-1 mt-2.5 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-gray-300 hover:text-amber-400 hover:fill-amber-400 transition-colors" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Destination <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select destination</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">City <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select city</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Address <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter full address of the hotel" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Landmark</label>
                <input type="text" placeholder="Enter nearby landmark (optional)" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Pin Code</label>
                <input type="text" placeholder="Enter pin code" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
                  <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-200 h-9">
                    <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-4 rounded-sm" />
                    <span className="text-[11px] font-bold text-gray-600">+91</span>
                  </div>
                  <input type="text" placeholder="Enter phone number" className="flex-1 text-xs font-medium text-gray-800 px-3 py-2.5 outline-none placeholder:text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" placeholder="Enter email address" className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Hotel Details */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">2</div>
              <h2 className="text-sm font-bold text-gray-800">Hotel Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-4 space-y-5">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Check-in Time <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <select className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                        <option>02:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Check-out Time <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <select className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                        <option>11:00 AM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Hotel Policies</label>
                  <textarea rows={4} placeholder="Enter hotel policies, rules, and important information..." className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400"></textarea>
                  <div className="flex justify-end mt-1">
                    <p className="text-[9px] text-gray-400 font-medium">0 / 500 characters</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Description <span className="text-red-500">*</span></label>
                <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 h-[190px] flex flex-col">
                  <div className="bg-gray-50 border-b border-gray-200 px-2 py-1.5 flex items-center gap-2 shrink-0 overflow-x-auto">
                    <select className="text-xs bg-transparent font-medium text-gray-600 outline-none cursor-pointer">
                      <option>Paragraph</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                    </select>
                    <div className="w-px h-4 bg-gray-300 shrink-0"></div>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><Bold size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><Italic size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><Underline size={14} /></button>
                    <div className="w-px h-4 bg-gray-300 shrink-0"></div>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><List size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><LinkIcon size={14} /></button>
                    <button type="button" className="p-1 hover:bg-gray-200 rounded text-gray-600 shrink-0"><ImageIcon size={14} /></button>
                  </div>
                  <textarea placeholder="Write a short description about the hotel..." className="w-full flex-1 text-xs font-medium text-gray-800 px-3 py-2.5 outline-none resize-none placeholder:text-gray-400 border-none"></textarea>
                </div>
                <div className="flex justify-end mt-1">
                  <p className="text-[9px] text-gray-400 font-medium">0 / 1000 characters</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Images & Media */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">3</div>
              <h2 className="text-sm font-bold text-gray-800">Images</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Featured Image <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors h-[140px]">
                  <UploadCloud size={24} className="text-blue-500 mb-2" />
                  <p className="text-[11px] font-bold text-gray-700">Upload featured image</p>
                  <div className="mt-2 text-[9px] text-gray-400 font-medium">
                    <p>Recommended size: 1200 x 800px</p>
                    <p>JPG, PNG, WEBP (Max 2MB)</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Gallery Images</label>
                <div className="flex-1 border border-gray-200 rounded-xl p-4 flex gap-3 overflow-x-auto items-center h-[140px]">
                  
                  {/* Mock Uploaded Images */}
                  <div className="w-[100px] h-[100px] shrink-0 rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                    <button className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-rose-50 hover:text-rose-600 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>
                  <div className="w-[100px] h-[100px] shrink-0 rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                    <button className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-rose-50 hover:text-rose-600 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>
                  <div className="w-[100px] h-[100px] shrink-0 rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                    <button className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-rose-50 hover:text-rose-600 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>
                  
                  {/* Add More Button */}
                  <button className="w-[100px] h-[100px] shrink-0 rounded-lg border-2 border-dashed border-gray-300 text-blue-600 flex flex-col items-center justify-center gap-1 hover:bg-blue-50 transition-colors cursor-pointer">
                    <Plus size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold">Add More</span>
                  </button>

                </div>
                <p className="text-[9px] text-gray-400 font-medium mt-1.5">You can upload up to 10 images (Max 2MB each)</p>
              </div>
            </div>
          </div>

          {/* 4. Additional Information */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">4</div>
              <h2 className="text-sm font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Total Room Types <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select number of room types</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Total Floors</label>
                <input type="number" placeholder="Enter total floors" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Total Rooms</label>
                <input type="number" placeholder="Enter total rooms" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Year Established</label>
                <div className="relative">
                  <select className="w-full pl-3 pr-9 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                    <option value="">Select year</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                  <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* 1. Preview Card */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Preview</h3>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your hotel card will look.</p>
            
            {/* Card Mockup */}
            <div className="w-full border border-gray-100 rounded-xl overflow-hidden shadow-sm group p-2">
              <div className="h-40 overflow-hidden relative rounded-lg">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3 bg-white">
                
                {/* FIXED: Hotel Name + Stars + Rating inline */}
                <div className="flex items-center flex-wrap gap-1.5 mb-2">
                  <h4 className="font-bold text-gray-800 text-sm leading-tight mr-1">Hotel Name</h4>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] font-medium text-gray-500 ml-1">
                    <Star size={10} className="text-gray-400" /> 4.5/5
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500 mb-3">
                  <MapPin size={10} /> City, Destination
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Luxury</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Free WiFi</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Pool</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Restaurant</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Tips */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            {/* FIXED: Added Bulb icon */}
            <h3 className="text-sm font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
               <Lightbulb size={16} className="text-blue-600" /> Tips
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Use high quality images of the hotel.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Provide accurate information for better customer trust.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Add all amenities and facilities available.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Keep descriptions clear and attractive.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Active hotels will be visible on the website.
              </li>
            </ul>
          </div>

          {/* 3. Room Types Info */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
            
            {/* FIXED: Icon is now inline with the title */}
            <div className="w-full flex items-center justify-start gap-2 mb-4">
              <BedDouble size={18} className="text-[#1e3a5f]" />
              <h3 className="text-sm font-bold text-[#1e3a5f]">
                Room Types <span className="text-gray-400 font-medium text-xs ml-1">(You can add later)</span>
              </h3>
            </div>
            
            <div className="text-center w-full">
              <p className="text-[11px] text-gray-500 font-medium mb-4 leading-relaxed">No room types added yet.<br/>After saving, you can add room types with pricing.</p>
              
              {/* FIXED: Button is centered with auto width like in the image */}
              <button className="mx-auto px-4 py-2 border border-gray-200 text-[#1e3a5f] rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                <Plus size={14} strokeWidth={2.5} /> Add Room Type
              </button>
            </div>

          </div>

          {/* 4. Action Buttons (Save/Draft/Cancel) */}
          <div className="flex items-center justify-end gap-2.5 mt-2">
            <Link href="/hotels" className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-[11px] font-bold hover:bg-gray-50 transition-colors cursor-pointer">
               Cancel
            </Link>
            <button className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 bg-white text-[11px] font-bold hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
               Save as Draft
            </button>
            <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5">
              <Save size={13} strokeWidth={2.5} /> Save Hotel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}