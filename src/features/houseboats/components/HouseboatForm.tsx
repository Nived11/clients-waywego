"use client";

import { 
  ArrowLeft, UploadCloud, Image as ImageIcon, Plus, Check, MapPin, 
  Bold, Italic, Underline, List, Link as LinkIcon, Save, X, 
  Star, Clock, Calendar, Lightbulb, Users, Wind, Wifi, Anchor,
  Settings, SlidersHorizontal, FileSpreadsheet
} from "lucide-react";
import Link from "next/link";

interface HouseboatFormProps {
  isEditMode?: boolean; 
}

export default function HouseboatForm({ isEditMode = false }: HouseboatFormProps) {
  
  // Amenities list from the design
  const amenitiesList = [
    "Air Conditioning", "Free WiFi", "TV", "Music System", "Dining Area", "Sun Deck",
    "Kitchen", "Refrigerator", "Hot Water", "Room Service", "Power Backup", "Parking",
    "Life Jacket", "First Aid", "Fire Extinguisher", "Private Bathroom", "Balcony", "Other"
  ];

  return (
    <div className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/houseboats" className="text-blue-600 cursor-pointer hover:underline">
              Houseboats
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit Houseboat' : 'Add New Houseboat'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">
            {isEditMode ? 'Edit Houseboat' : 'Add New Houseboat'}
          </h1>
          <p className="text-gray-500 text-xs font-medium mt-1">
            {isEditMode ? 'Update houseboat details, amenities and pricing.' : 'Add houseboat details, amenities, rooms and pricing information.'}
          </p>
        </div>
        
        <Link 
          href="/houseboats" 
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Houseboats
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
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Houseboat Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter houseboat name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Registration Number <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. KL-ALP-0012" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Houseboat Category <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select category</option>
                  <option>Premium</option>
                  <option>Luxury</option>
                  <option>Deluxe</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Destination <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select destination</option>
                  <option>Alleppey</option>
                  <option>Kumarakom</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Lake / Backwater <span className="text-red-500">*</span></label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select lake or backwater</option>
                  <option>Vembanad Lake</option>
                  <option>Punnamada Lake</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Built Year</label>
                <div className="relative">
                  <select className="w-full pl-3 pr-9 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                    <option value="">Select year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                  <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Country</label>
                <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option>India</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="col-span-1 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Short Description <span className="text-red-500">*</span></label>
                <textarea 
                  placeholder="Enter short description (max 150 characters)" 
                  className="w-full flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400"
                ></textarea>
                <div className="flex justify-end mt-1">
                  <p className="text-[9px] text-gray-400 font-medium">0 / 150 characters</p>
                </div>
              </div>
              
              <div className="col-span-2 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Detailed Description <span className="text-red-500">*</span></label>
                <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 flex flex-col min-h-[120px]">
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
                  <textarea placeholder="Write detailed description about the houseboat..." className="w-full flex-1 text-xs font-medium text-gray-800 px-3 py-2.5 outline-none resize-none placeholder:text-gray-400 border-none"></textarea>
                </div>
                <div className="flex justify-end mt-1">
                  <p className="text-[9px] text-gray-400 font-medium">0 / 1000 characters</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Capacity & Details */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">2</div>
              <h2 className="text-sm font-bold text-gray-800">Capacity & Details</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Total Rooms <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter number of rooms" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Max Guests <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter maximum guests" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">No. of Beds</label>
                <input type="number" placeholder="Enter total beds" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">No. of Bathrooms</label>
                <input type="number" placeholder="Enter number of bathrooms" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Check-in Time</label>
                <div className="relative">
                  <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                    <option>12:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Check-out Time</label>
                <div className="relative">
                  <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer">
                    <option>09:00 AM</option>
                  </select>
                </div>
              </div>
              
              {/* Radio Buttons styled like the image */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2.5">Air Conditioning</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="ac" value="yes" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    Yes
                  </label>
                  <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="ac" value="no" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2.5">WiFi</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="wifi" value="yes" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    Yes
                  </label>
                  <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="wifi" value="no" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Images */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">3</div>
              <h2 className="text-sm font-bold text-gray-800">Images</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              
              <div className="col-span-3 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Gallery Images</label>
                <div className="flex-1 border border-gray-200 rounded-xl p-4 flex gap-3 overflow-x-auto items-center h-[140px]">
                  
                  {/* Empty Image Placeholders (like in design) */}
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-[100px] h-[100px] shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                      <ImageIcon size={24} className="text-gray-300" />
                    </div>
                  ))}
                  
                  {/* Add More Button */}
                  <button className="w-[100px] h-[100px] shrink-0 rounded-lg border-2 border-dashed border-blue-200 text-blue-600 flex flex-col items-center justify-center gap-1 hover:bg-blue-50 transition-colors cursor-pointer bg-blue-50/50">
                    <Plus size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold">Add More</span>
                  </button>

                </div>
                <p className="text-[9px] text-gray-400 font-medium mt-1.5">You can upload up to 10 images (Max 2MB each)</p>
              </div>
            </div>
          </div>

          {/* 4. Amenities & Facilities */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 min-w-[24px] min-h-[24px] flex-none rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">4</div>
              <h2 className="text-sm font-bold text-gray-800">Amenities & Facilities</h2>
            </div>
            <p className="text-[11px] text-gray-500 font-medium mb-6 ml-9">Select all amenities and facilities available in this houseboat.</p>
            
            {/* Checkbox Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2 pl-9">
              {amenitiesList.map((amenity, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <input 
                      type="checkbox" 
                      defaultChecked={idx < 4 || idx === 8 || idx === 11 || idx === 12 || idx === 14 || idx === 16} // some default checks like in image
                      className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer"
                    />
                    <Check size={12} strokeWidth={4} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{amenity}</span>
                </label>
              ))}
            </div>

            <button className="mt-6 ml-9 flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
              <Plus size={14} strokeWidth={2.5} /> Add Custom Amenity
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          {/* 1. Preview Card */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Preview</h3>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your houseboat card will look.</p>
            
            <div className="w-full border border-gray-100 rounded-xl overflow-hidden shadow-sm group p-2">
              <div className="h-36 overflow-hidden relative rounded-lg bg-gray-100">
                <img src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400&h=300&fit=crop" alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3 bg-white">
                
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-gray-800 text-[13px] leading-tight">Houseboat Name</h4>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded border border-emerald-100/50">Premium</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500 mb-3">
                  <div className="flex items-center gap-0.5 mr-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-700">4.6/5</span> (128 reviews)
                </div>

                <div className="flex items-center gap-3 text-[10px] font-medium text-gray-600 mb-3">
                  <div className="flex items-center gap-1"><Anchor size={12} className="text-gray-400" /> Rooms: 6</div>
                  <div className="flex items-center gap-1"><Users size={12} className="text-gray-400" /> Guests: 12</div>
                  <div className="flex items-center gap-1"><Wind size={12} className="text-gray-400" /> AC</div>
                  <div className="flex items-center gap-1"><Wifi size={12} className="text-gray-400" /> WiFi</div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500">
                  <MapPin size={12} className="text-gray-400" /> Alleppey, Kerala
                </div>
                
              </div>
            </div>
          </div>

          {/* 2. Tips */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
               <Lightbulb size={16} className="text-blue-600" /> Tips
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Use high quality images of the houseboat.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Provide accurate information for better trust.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Add all amenities and facilities available.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-gray-600 font-medium leading-relaxed">
                <Check size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                Active houseboats will be visible on the website.
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-800 mb-4">Quick Links</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <Settings size={14} /> Manage Houseboat Categories
                </div>
                <span className="text-gray-400 group-hover:text-blue-600">&gt;</span>
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <SlidersHorizontal size={14} /> Manage Amenities
                </div>
                <span className="text-gray-400 group-hover:text-blue-600">&gt;</span>
              </button>
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <FileSpreadsheet size={14} /> Bulk Update Prices
                </div>
                <span className="text-gray-400 group-hover:text-blue-600">&gt;</span>
              </button>
            </div>
          </div>

          {/* 4. Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 mt-2">
            <Link href="/houseboats" className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-[11px] font-bold hover:bg-gray-50 transition-colors cursor-pointer">
               Cancel
            </Link>
            <button className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 bg-white text-[11px] font-bold hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
               Save as Draft
            </button>
            <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5">
              <Save size={13} strokeWidth={2.5} /> Save Houseboat
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}