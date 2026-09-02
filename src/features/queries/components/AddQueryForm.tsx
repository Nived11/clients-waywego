import { useRef } from "react";
import { 
  X, User, Info, ClipboardList, Plane, Hotel, Car, 
  MessageSquare, FileText, MapPin, Clock, Calendar, 
  Users, Baby, Phone, Mail, Flag, Briefcase, 
  UserCheck, Target, ClipboardCheck, Map, UserPlus 
} from "lucide-react";

interface AddQueryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddQueryForm({ isOpen, onClose }: AddQueryFormProps) {
  // ടെക്സ്റ്റ് ഏരിയയുടെ വലിപ്പം തനിയെ മാറ്റാൻ വേണ്ടിയുള്ള Ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (!isOpen) return null;

  // സിമ്പിൾ സബ്മിറ്റ് ഫംഗ്ഷൻ 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Query Saved Successfully! ✅");
    onClose();
  };

  // ടൈപ്പ് ചെയ്യുമ്പോൾ ടെക്സ്റ്റ് ഏരിയ വലുതാക്കാനുള്ള ഫംഗ്ഷൻ
  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // ആദ്യം ഹൈറ്റ് റീസെറ്റ് ചെയ്യും
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // കണ്ടെന്റിന്റെ ഹൈറ്റ് കൊടുക്കും
    }
  };

  return (
    // Backdrop
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-slate-50 w-full max-w-5xl rounded-xl shadow-2xl flex flex-col h-[95vh] md:h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#1e3a5f] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 font-bold text-lg">
            <UserPlus size={20} strokeWidth={2.5} />
            <h2>Add Query</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <form id="add-query-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Client Information */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <User size={16} className="text-slate-800" strokeWidth={2.5} /> Client Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <User size={14} className="text-blue-500" strokeWidth={2.5} /> Client Name*
                  </label>
                  <input type="text" required placeholder="Enter full name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <User size={14} className="text-blue-500" strokeWidth={2.5} /> Title*
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select</option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Phone size={14} className="text-blue-500" strokeWidth={2.5} /> Phone Number*
                  </label>
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-white">
                    <div className="flex items-center gap-1.5 px-2.5 border-r border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700">
                      <span>🇮🇳</span> <span>+91</span>
                    </div>
                    <input type="tel" required placeholder="Enter phone number" className="w-full text-xs font-medium text-gray-800 px-3 py-2.5 outline-none placeholder:text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Mail size={14} className="text-blue-500" strokeWidth={2.5} /> Email
                  </label>
                  <input type="email" placeholder="email@example.com" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            {/* 2. Query Details */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <Info size={16} className="text-slate-800" strokeWidth={2.5} /> Query Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Users size={14} className="text-blue-500" strokeWidth={2.5} /> Type*
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select</option>
                    <option>Domestic</option>
                    <option>International</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Map size={14} className="text-blue-500" strokeWidth={2.5} /> Sector*
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select</option>
                    <option>Kerala</option>
                    <option>Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Flag size={14} className="text-blue-500" strokeWidth={2.5} /> Priority*
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Briefcase size={14} className="text-blue-500" strokeWidth={2.5} /> Services*
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">Select Services</option>
                    <option>Tour Package</option>
                    <option>Hotel Only</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Assignment & Source */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <ClipboardList size={16} className="text-slate-800" strokeWidth={2.5} /> Assignment & Source
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <UserCheck size={14} className="text-emerald-600" strokeWidth={2.5} /> Assign To
                  </label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">-- Select Team Member --</option>
                    <option>Akhil K</option>
                    <option>Nisha R</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Target size={14} className="text-emerald-600" strokeWidth={2.5} /> Lead Source
                  </label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">-- Select Lead Source --</option>
                    <option>WhatsApp</option>
                    <option>Website</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Travel Details */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <Plane size={16} className="text-slate-800" strokeWidth={2.5} /> Travel Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <MapPin size={14} className="text-orange-500" strokeWidth={2.5} /> Coming From
                  </label>
                  <input type="text" placeholder="Enter city or starting location" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                  <p className="text-[11px] font-medium text-gray-500 mt-1.5">Optional starting location</p>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Clock size={14} className="text-orange-500" strokeWidth={2.5} /> Total Days*
                  </label>
                  <input type="number" required placeholder="Enter number of days" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-400" />
                  <p className="text-[11px] font-medium text-gray-500 mt-1.5">Enter trip duration</p>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Calendar size={14} className="text-orange-500" strokeWidth={2.5} /> From Date*
                  </label>
                  <input type="date" required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                  <p className="text-[11px] font-medium text-gray-500 mt-1.5">Start date of travel</p>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Calendar size={14} className="text-orange-500" strokeWidth={2.5} /> To Date*
                  </label>
                  <input type="date" required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                  <p className="text-[11px] font-medium text-gray-500 mt-1.5">Auto-calculated (can edit)</p>
                </div>
              </div>
            </div>

            {/* 5. Passenger Information */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <Users size={16} className="text-slate-800" strokeWidth={2.5} /> Passenger Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <User size={14} className="text-red-500" strokeWidth={2.5} /> Adults *
                  </label>
                  <input type="number" required defaultValue="1" min="1" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Baby size={14} className="text-red-500" strokeWidth={2.5} /> Childrens(6-12)
                  </label>
                  <input type="number" defaultValue="0" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                     Infants(below 5)
                  </label>
                  <input type="number" defaultValue="0" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
              </div>
            </div>

            {/* 6. Hotel Requirements */}
            <div className="bg-blue-50/40 p-5 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#1e3a5f] mb-5 uppercase tracking-wide">
                <Hotel size={16} className="text-blue-700" strokeWidth={2.5} /> Hotel Requirements
              </h3>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Double Rooms</label>
                  <input type="number" defaultValue="1" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Extra Beds</label>
                  <input type="number" defaultValue="0" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Child w/ Bed (CWB)</label>
                  <input type="number" defaultValue="0" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Child w/o Bed (CNB)</label>
                  <input type="number" defaultValue="0" min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
                </div>
              </div>
            </div>

            {/* 7. Vehicle Requirements & Houseboat */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-5">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold text-[#1e3a5f] mb-5 uppercase tracking-wide">
                  <Car size={16} className="text-[#1e3a5f]" strokeWidth={2.5} /> Vehicle Requirements
                </h3>
                <div className="w-full md:w-1/2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Vehicle Type</label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option value="">-- Select Preferred Vehicle --</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Innova</option>
                  </select>
                </div>
              </div>

              {/* Houseboat Toggle */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                   Include Houseboat Requirements?
                </h3>
              </div>
            </div>

            {/* 8. Initial Query Status */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                <ClipboardCheck size={16} className="text-orange-500" strokeWidth={2.5} /> Initial Query Status & Follow-up Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <Flag size={14} className="text-blue-500" strokeWidth={2.5} /> Query Status *
                  </label>
                  <select required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option>New (Data Received)</option>
                    <option>Contacted</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Follow-up Method</label>
                  <select className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                    <option>Phone Call / WhatsApp / Email / Meeting</option>
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                  <MessageSquare size={14} className="text-blue-500" strokeWidth={2.5} /> Follow-up Note / Remarks
                </label>
                
                {/* Auto-expanding Textarea - ref ഉം onInput ഉം ചേർത്തിട്ടുണ്ട്, overflow-hidden നൽകി */}
                <textarea 
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  rows={3} 
                  placeholder="Enter conversation details or client requirement notes..." 
                  className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none resize-none overflow-hidden placeholder:text-gray-400"
                ></textarea>
                
              </div>
            </div>

          </form>
        </div>

        {/* Modal Footer (Sticky Bottom) */}
        <div className="bg-white border-t border-gray-200 p-4 flex items-center justify-end gap-3 shrink-0 rounded-b-xl">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-2 rounded-lg border-2 border-indigo-100 text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-colors cursor-pointer"
          >
            ✖ Cancel
          </button>
          <button 
            type="submit" 
            form="add-query-form"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileText size={14} strokeWidth={2.5} /> Save Query
          </button>
        </div>

      </div>
    </div>
  );
}