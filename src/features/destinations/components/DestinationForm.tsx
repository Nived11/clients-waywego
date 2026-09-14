"use client";

import { 
  ArrowLeft, UploadCloud, Plus, MapPin, 
  Bold, Italic, Underline, List, ListOrdered, Save, X, Loader2, ChevronDown, Link as LinkIcon, Calendar, Trash2, Lightbulb, Check
} from "lucide-react";
import Link from "next/link";
import { useState, DragEvent, useEffect } from "react";
import { useDestinationForm } from "../hooks/useDestinationForm";
import { Country } from 'country-state-city';
import DestinationFormSkeleton from "./DestinationFormSkeleton";

// 🔥 1. destinationId കൂടി പ്രോപ്സ് ആയി സ്വീകരിക്കാൻ ചേർത്തു
interface DestinationFormProps {
  isEditMode?: boolean; 
  destinationId?: string; 
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PREDEFINED_REGIONS = ["Asia", "Middle East", "Europe", "Africa", "North America", "South America", "Oceania", "Caribbean"];

export default function DestinationForm({ isEditMode = false, destinationId }: DestinationFormProps) {
  
  // 🔥 2. destinationId ഹുക്കിലേക്ക് പാസ്സ് ചെയ്യുന്നു, ഒപ്പം isFetchingData എടുക്കുന്നു
  const { 
    formData, handleChange, setFieldValue,
    featuredPreview, handleFeaturedImage, handleFeaturedImageDrop, removeFeaturedImage,
    galleryPreviews, handleGalleryImages, handleGalleryImagesDrop, removeGalleryImage,
    moveGalleryToFeatured,
    handleSubmit, loading, error, isFetchingData
  } = useDestinationForm(destinationId);

  const [regionOpen, setRegionOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  
  const [regionSearch, setRegionSearch] = useState(formData.region || '');
  const [countrySearch, setCountrySearch] = useState(formData.country || '');

  const [isDragOverFeatured, setIsDragOverFeatured] = useState(false);
  const [isDragOverGallery, setIsDragOverGallery] = useState(false);
  
  useEffect(() => { setRegionSearch(formData.region); }, [formData.region]);
  useEffect(() => { setCountrySearch(formData.country); }, [formData.country]);

  // 1. Filter Regions
  const filteredRegions = PREDEFINED_REGIONS.filter(r => r.toLowerCase().includes(regionSearch.toLowerCase()));

  // 2. Filter Countries Dynamically based on Region
  const allCountries = Country.getAllCountries();
  
  const getFilteredCountries = () => {
    if (!formData.region) return []; // Region ഇല്ലാതെ രാജ്യങ്ങൾ കാണിക്കില്ല

    let regionFiltered = allCountries;
    const r = formData.region.toLowerCase();

    // Timezone & Code അടിസ്ഥാനമാക്കി രാജ്യങ്ങളെ വേർതിരിക്കുന്നു
    if (r === "middle east") {
      const meCodes = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'IL', 'LB', 'JO', 'SY', 'IQ', 'IR', 'YE', 'TR', 'EG'];
      regionFiltered = allCountries.filter(c => meCodes.includes(c.isoCode));
    } else if (r === "asia") {
      const meCodes = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'IL', 'LB', 'JO', 'SY', 'IQ', 'IR', 'YE'];
      regionFiltered = allCountries.filter(c => c.timezones?.some(t => t.zoneName.includes('Asia/')) && !meCodes.includes(c.isoCode));
    } else if (r === "europe") {
      regionFiltered = allCountries.filter(c => c.timezones?.some(t => t.zoneName.includes('Europe/')));
    } else if (r === "africa") {
      regionFiltered = allCountries.filter(c => c.timezones?.some(t => t.zoneName.includes('Africa/')));
    } else if (r.includes("america") || r === "caribbean") {
      regionFiltered = allCountries.filter(c => c.timezones?.some(t => t.zoneName.includes('America/')));
    } else if (r === "oceania") {
      regionFiltered = allCountries.filter(c => c.timezones?.some(t => t.zoneName.includes('Australia/') || t.zoneName.includes('Pacific/') || t.zoneName.includes('Indian/')));
    }

    // Return the search filtered result
    return regionFiltered.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()));
  };

  const filteredCountries = getFilteredCountries();

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  // Drag Handlers
  const onFeaturedDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragOverFeatured(true); };
  const onFeaturedDragLeave = () => setIsDragOverFeatured(false);
  const onFeaturedDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragOverFeatured(false);
    const galleryIdx = e.dataTransfer.getData('galleryIndex');
    if (galleryIdx) moveGalleryToFeatured(parseInt(galleryIdx));
    else if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFeaturedImageDrop(e.dataTransfer.files[0]);
  };

  const onGalleryDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragOverGallery(true); };
  const onGalleryDragLeave = () => setIsDragOverGallery(false);
  const onGalleryDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragOverGallery(false);
    if (e.dataTransfer.files) handleGalleryImagesDrop(Array.from(e.dataTransfer.files));
  };

 if (isFetchingData) {
    return <DestinationFormSkeleton />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[1600px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
            <Link href="/destinations" className="text-blue-600 cursor-pointer hover:underline">Destinations</Link>
            <span>&gt;</span>
            <span className="text-gray-700">{isEditMode ? 'Edit Destination' : 'Add New Destination'}</span>
          </div>
          <h1 className="text-2xl font-black text-[#1e3a5f]">{isEditMode ? 'Edit Destination' : 'Add New Destination'}</h1>
        </div>
        
        <Link href="/destinations" className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors cursor-pointer w-fit">
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Destinations
        </Link>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold">{error}</div>}

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* ================= LEFT COLUMN: Main Form Elements ================= */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Destination Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Destination Name <span className="text-red-500">*</span></label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter destination name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Slug / URL <span className="text-red-500">*</span></label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="e.g. kerala" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                <p className="text-[10px] text-gray-500 font-medium mt-1">This will be used in the website URL.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
              
              {/* REGION */}
              <div className="md:col-span-3 relative">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Region <span className="text-red-500">*</span></label>
                <input 
                  required 
                  type="text" 
                  value={regionSearch} 
                  onChange={(e) => {
                    setRegionSearch(e.target.value);
                    setFieldValue('region', e.target.value);
                    setRegionOpen(true);
                  }} 
                  onFocus={() => setRegionOpen(true)}
                  onBlur={() => setTimeout(() => setRegionOpen(false), 200)}
                  placeholder="e.g. Asia" 
                  className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" 
                  autoComplete="off"
                />
                <ChevronDown size={14} className="text-gray-400 absolute right-3 top-[34px] pointer-events-none" />
                {regionOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto py-1">
                    {filteredRegions.length > 0 ? filteredRegions.map(r => (
                      <div key={r} onMouseDown={() => {
                        if (formData.region !== r) {
                          setFieldValue('country', '');
                          setCountrySearch('');
                        }
                        setFieldValue('region', r);
                        setRegionSearch(r);
                        setRegionOpen(false);
                      }} className="px-3 py-2 text-xs hover:bg-blue-50 cursor-pointer text-gray-700 font-medium">
                        {r}
                      </div>
                    )) : (
                      <div className="px-3 py-2 text-[11px] text-gray-500 italic">"{regionSearch}" will be added as new</div>
                    )}
                  </div>
                )}
              </div>

              {/* COUNTRY */}
              <div className="md:col-span-4 relative">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Country <span className="text-red-500">*</span></label>
                <input 
                  required 
                  type="text" 
                  disabled={!formData.region}
                  value={countrySearch} 
                  onChange={(e) => {
                    setCountrySearch(e.target.value);
                    setFieldValue('country', e.target.value);
                    setCountryOpen(true);
                  }} 
                  onFocus={() => setCountryOpen(true)}
                  onBlur={() => setTimeout(() => setCountryOpen(false), 200)}
                  placeholder={formData.region ? "Search country" : "Select Region First"} 
                  className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed" 
                  autoComplete="off"
                />
                <ChevronDown size={14} className="text-gray-400 absolute right-3 top-[34px] pointer-events-none" />
                {countryOpen && formData.region && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto py-1">
                    {filteredCountries.length > 0 ? filteredCountries.map(c => (
                      <div key={c.isoCode} onMouseDown={() => {
                        setFieldValue('country', c.name);
                        setCountrySearch(c.name);
                        setCountryOpen(false);
                      }} className="px-3 py-2 text-xs hover:bg-blue-50 cursor-pointer text-gray-700 font-medium">
                        {c.name}
                      </div>
                    )) : (
                      <div className="px-3 py-2 text-[11px] text-gray-500 italic">"{countrySearch}" will be added as new country</div>
                    )}
                  </div>
                )}
              </div>

              {/* TYPE */}
              <div className="md:col-span-5">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Type <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-4 h-9">
                  {['state', 'city', 'country', 'other'].map(type => (
                    <label key={type} className="flex items-center gap-1.5 text-xs text-gray-700 font-medium cursor-pointer capitalize">
                      <input type="radio" name="destination_type" value={type} checked={formData.destination_type === type} onChange={handleChange} className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500" /> {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Short Description <span className="text-red-500">*</span></label>
                <textarea required name="short_description" value={formData.short_description} onChange={handleChange} maxLength={160} rows={5} placeholder="Enter short description (max 160 characters)" className="w-full flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400"></textarea>
                <p className="text-[10px] text-gray-500 font-medium mt-1">{formData.short_description.length} / 160 characters</p>
              </div>

              <div className="flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Detailed Description <span className="text-red-500">*</span></label>
                <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 flex flex-col">
                  <div className="bg-gray-50 border-b border-gray-200 px-2 py-1.5 flex items-center gap-1 overflow-x-auto">
                    <select onChange={(e) => handleFormat('formatBlock', e.target.value)} className="text-xs bg-transparent font-medium text-gray-600 outline-none cursor-pointer p-1">
                      <option value="P">Paragraph</option>
                      <option value="H1">Heading 1</option>
                      <option value="H2">Heading 2</option>
                    </select>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('bold'); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Bold size={13} /></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('italic'); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Italic size={13} /></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('underline'); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Underline size={13} /></button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('insertUnorderedList'); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><List size={13} /></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('insertOrderedList'); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><ListOrdered size={13} /></button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); handleFormat('createLink', prompt('Enter URL') || ''); }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><LinkIcon size={13} /></button>
                  </div>
                  <div 
                    contentEditable
                    onInput={(e) => setFieldValue('detailed_description', e.currentTarget.innerHTML)}
                    // 🔥 DangerouslySetInnerHTML ഉപയോഗിച്ച് മുൻപുള്ള ഡാറ്റ കാണിക്കാൻ 
                    dangerouslySetInnerHTML={{ __html: formData.detailed_description }}
                    className="flex-1 w-full text-xs font-medium text-gray-800 px-3 py-2.5 outline-none bg-white overflow-y-auto [&>ul]:list-disc [&>ul]:ml-5 [&>ol]:list-decimal [&>ol]:ml-5 [&>h1]:text-lg [&>h1]:font-bold [&>h2]:text-base [&>h2]:font-bold min-h-[100px] empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 cursor-text"
                    data-placeholder="Write detailed description about this destination..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Images & Media</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Featured Image */}
              <div className="col-span-1">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Featured Image <span className="text-red-500">*</span></label>
                <div 
                  onDragOver={onFeaturedDragOver} 
                  onDragLeave={onFeaturedDragLeave} 
                  onDrop={onFeaturedDrop}
                  className={`relative border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 text-center transition-colors overflow-hidden h-[140px] 
                    ${isDragOverFeatured ? 'bg-blue-50 border-blue-400' : 'bg-gray-50 border-gray-300 hover:bg-blue-50 hover:border-blue-300'}`}
                >
                  {featuredPreview ? (
                    <>
                      <img src={featuredPreview} alt="Featured" className="absolute inset-0 w-full h-full object-cover" />
                      <button type="button" onClick={removeFeaturedImage} className="absolute top-2 right-2 bg-white/90 text-rose-500 p-1.5 rounded-md shadow-sm hover:bg-rose-50 border border-rose-100 z-20 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </>
                  ) : (
                    <>
                      <input required={!featuredPreview} type="file" accept="image/*" onChange={handleFeaturedImage} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <UploadCloud size={24} className="text-blue-500 mb-2" />
                      <p className="text-[11px] font-bold text-gray-700">Drag & drop image here</p>
                      <p className="text-[8px] text-gray-400 mt-2">Recommended size: 1200 x 800px<br/>Allowed: JPG, PNG, WEBP (Max 2MB)</p>
                    </>
                  )}
                </div>
              </div>
              
              {/* Gallery Images */}
              <div className="col-span-2 flex flex-col">
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Gallery Images (Max 10)</label>
                
                <div 
                  onDragOver={onGalleryDragOver}
                  onDragLeave={onGalleryDragLeave}
                  onDrop={onGalleryDrop}
                  className={`flex-1 border border-gray-200 rounded-xl p-4 flex gap-3 overflow-x-auto items-center min-h-[140px] transition-colors
                    ${isDragOverGallery ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
                >
                  
                  {galleryPreviews.map((src, idx) => (
                    <div 
                      key={idx} 
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('galleryIndex', idx.toString())}
                      className="w-24 h-24 shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group cursor-grab active:cursor-grabbing"
                      title="Drag to Featured Image to set as cover"
                    >
                      <img src={src} className="w-full h-full object-cover" />
                      <button type="button" onClick={() => removeGalleryImage(idx)} className="absolute top-1 right-1 bg-white/90 text-rose-500 p-1 rounded shadow-sm hover:bg-rose-50 border border-rose-100 z-10 cursor-pointer">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}

                  {galleryPreviews.length < 10 && (
                    <label className="w-24 h-24 shrink-0 rounded-lg border-2 border-dashed border-gray-300 text-blue-600 flex flex-col items-center justify-center gap-1 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer relative bg-gray-50">
                      <input type="file" multiple accept="image/*" onChange={handleGalleryImages} className="hidden" />
                      <Plus size={20} strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-center leading-tight px-2">Click or Drop<br/>to Add</span>
                    </label>
                  )}
                </div>
                <p className="text-[10px] text-gray-500 font-medium mt-1.5">Tip: You can drag a gallery image into the Featured Image box to set it as cover.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Popular For (Tags)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g. Beaches, Mountains, Adventure" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
                <p className="text-[10px] text-gray-500 font-medium mt-1">Add multiple tags separated by comma.</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Best Time to Visit</label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <select name="best_time_start" value={formData.best_time_start} onChange={handleChange} className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white appearance-none cursor-pointer">
                      <option value="">Select start month</option>
                      {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="relative flex-1">
                    <select name="best_time_end" value={formData.best_time_end} onChange={handleChange} className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 bg-white appearance-none cursor-pointer">
                      <option value="">Select end month</option>
                      {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Coordinates (Optional)</label>
                <div className="flex items-center gap-2">
                  <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" className="flex-1 text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
                  <div className="relative flex-1">
                    <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} placeholder="Longitude" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
                    <MapPin size={14} className="text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Display Order</label>
                <input type="number" name="display_order" value={formData.display_order} onChange={handleChange} onWheel={(e) => (e.target as HTMLInputElement).blur()} placeholder="e.g. 1" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
                <p className="text-[10px] text-gray-500 font-medium mt-1">Lower numbers show first.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Title (SEO)</label>
                <input type="text" name="meta_title" value={formData.meta_title} onChange={handleChange} placeholder="Enter meta title" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Meta Description (SEO)</label>
                <input type="text" name="meta_description" value={formData.meta_description} onChange={handleChange} placeholder="Enter meta description" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: Sidebar & Status ================= */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 flex flex-col gap-6 sticky top-6">
          
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Destination Status</h3>
            <label className="block text-[11px] font-bold text-gray-700 mb-2">Status</label>
            <div className="flex items-center gap-3 mb-3">
              <label className={`flex-1 flex items-center justify-center gap-2 py-2.5 border-2 rounded-lg cursor-pointer transition-colors ${formData.is_active ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                <input type="radio" name="is_active" value="true" checked={formData.is_active === true} onChange={handleChange} className="hidden" />
                <div className={`w-3 h-3 rounded-full border-[3px] bg-white ${formData.is_active ? 'border-emerald-500' : 'border-gray-300'}`}></div>
                <span className={`text-[11px] font-bold ${formData.is_active ? 'text-emerald-700' : 'text-gray-500'}`}>Active</span>
              </label>
              <label className={`flex-1 flex items-center justify-center gap-2 py-2.5 border-2 rounded-lg cursor-pointer transition-colors ${!formData.is_active ? 'border-rose-500 bg-rose-50' : 'border-gray-200 bg-gray-50 hover:bg-rose-50'}`}>
                <input type="radio" name="is_active" value="false" checked={formData.is_active === false} onChange={handleChange} className="hidden" />
                <div className={`w-3 h-3 rounded-full border-[3px] bg-white ${!formData.is_active ? 'border-rose-500' : 'border-gray-300'}`}></div>
                <span className={`text-[11px] font-bold ${!formData.is_active ? 'text-rose-700' : 'text-gray-500'}`}>Inactive</span>
              </label>
            </div>
            <p className="text-[10px] text-gray-500 font-medium leading-relaxed">Active destinations will be visible in website and packages.</p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <Lightbulb size={16} className="text-blue-600" strokeWidth={2.5} /> Tips
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-blue-600" strokeWidth={3} />
                </div>
                Use a clear and attractive image that represents the destination.
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-blue-600" strokeWidth={3} />
                </div>
                Provide accurate information to help customers.
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-blue-600" strokeWidth={3} />
                </div>
                Add popular tags to improve search and visibility.
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-blue-600" strokeWidth={3} />
                </div>
                Active destinations will be shown in website.
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-800">Preview</h3>
            </div>
            <p className="text-[10px] text-gray-500 font-medium mb-4">This is how your destination card will look.</p>
            
            <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-md group bg-gray-100">
              {featuredPreview ? (
                 <img src={featuredPreview} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-300"><UploadCloud size={32}/></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-bold text-sm mb-1 truncate">
                  {formData.name || "Destination Name"}
                </h4>
                <p className="text-gray-200 text-[9px] font-medium line-clamp-2 leading-relaxed">
                  {formData.short_description || "Short description of the destination will appear here..."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-2">
            <Link href="/destinations" className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-[11px] font-bold hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
               Cancel
            </Link>
            <button disabled={loading} type="submit" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-70">
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} strokeWidth={2.5} />} 
              {loading ? 'Saving...' : 'Save Destination'}
            </button>
          </div>

        </div>
      </div>
    </form>
  );
}