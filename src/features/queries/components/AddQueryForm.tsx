import { useRef } from "react";
import { 
  X, User, Info, ClipboardList, Plane, Hotel, Car, 
  MessageSquare, FileText, MapPin, Clock, Calendar, 
  Users, Baby, Phone, Mail, Flag, Briefcase, 
  UserCheck, Target, ClipboardCheck, UserPlus, Loader2, Anchor, MapPinned
} from "lucide-react";
import { useAddQuery } from "../hooks/useAddQuery";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface AddQueryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  editData?: any; // 🔥 എഡിറ്റ് ചെയ്യാനുള്ള ഡാറ്റ സ്വീകരിക്കാൻ
}

export default function AddQueryForm({ isOpen, onClose, onSuccess, editData }: AddQueryFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSuccess = () => {
    if(onSuccess) onSuccess(); 
    onClose();
  };

  const { 
    formData, handleChange, handleValueChange, handleSubmit, 
    meta, loading, metaLoading, 
    showHouseboat, setShowHouseboat,
    phoneError 
  } = useAddQuery(handleSuccess, editData); // 🔥 editData പാസ്സ് ചെയ്യുന്നു

  if (!isOpen) return null;

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* 🚀 Advanced PhoneInput CSS with Smaller Dropdown */}
      <style>{`
        .custom-phone-input .PhoneInput {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .custom-phone-input .PhoneInputInput {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.75rem; /* text-xs */
          font-weight: 500;
          color: #1f2937; 
          background: transparent;
        }
        .custom-phone-input .PhoneInputCountry {
          margin-right: 8px;
        }
        .custom-phone-input .PhoneInputCountrySelect:focus {
          outline: none;
        }
        /* Style for the native dropdown options to make it smaller */
        .custom-phone-input .PhoneInputCountrySelect {
          font-size: 11px;
          cursor: pointer;
        }
        .custom-phone-input .PhoneInputCountrySelect option {
          font-size: 12px;
          color: #1f2937;
        }
      `}</style>

      <div className="bg-slate-50 w-full max-w-5xl rounded-xl shadow-2xl flex flex-col h-[95vh] md:h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#1e3a5f] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 font-bold text-lg">
            <UserPlus size={20} strokeWidth={2.5} />
            {/* 🔥 Edit ആണെങ്കിൽ ടൈറ്റിൽ മാറും */}
            <h2>{editData ? "Edit Query" : "Add Query"}</h2>
          </div>
          <button type="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {metaLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
            <p className="text-gray-500 font-medium">Loading form data...</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
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
                    <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} required placeholder="Enter full name" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <User size={14} className="text-blue-500" strokeWidth={2.5} /> Title*
                    </label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      {meta?.genders?.map((g: any) => <option key={g.value} value={g.value}>{g.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Phone size={14} className="text-blue-500" strokeWidth={2.5} /> Phone Number*
                    </label>
                    <div className={`custom-phone-input border rounded-lg overflow-hidden bg-white px-3 py-2 focus-within:ring-1 transition-colors ${phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus-within:ring-blue-500'}`}>
                      <PhoneInput
                        international
                        withCountryCallingCode
                        defaultCountry="IN"
                        placeholder="Enter phone number"
                        value={formData.phone_number}
                        onChange={(value) => handleValueChange("phone_number", value || "")}
                        className="w-full"
                      />
                    </div>
                    {phoneError && (
                      <span className="block text-red-500 text-[10px] font-bold mt-1.5">
                        {phoneError}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Mail size={14} className="text-blue-500" strokeWidth={2.5} /> Email
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
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
                    <select name="type" value={formData.type} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Type --</option>
                      {meta?.types?.map((t: any) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <MapPinned size={14} className="text-blue-500" strokeWidth={2.5} /> Sector*
                    </label>
                    <select name="sector" value={formData.sector} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Sector --</option>
                      {meta?.sectors?.map((s: any) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Flag size={14} className="text-blue-500" strokeWidth={2.5} /> Priority*
                    </label>
                    <select name="priority" value={formData.priority} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Priority --</option>
                      {meta?.priorities?.map((p: any) => <option key={p.value} value={p.value}>{p.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Briefcase size={14} className="text-blue-500" strokeWidth={2.5} /> Services*
                    </label>
                    <select name="services" value={formData.services} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Services --</option>
                      {meta?.services?.map((s: any) => <option key={s.value} value={s.value}>{s.label}</option>)}
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
                      <UserCheck size={14} className="text-emerald-600" strokeWidth={2.5} /> Assign To*
                    </label>
                    <select name="assign_id" value={formData.assign_id} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Team Member --</option>
                      {meta?.staff_members?.map((staff: any) => <option key={staff.id} value={staff.id}>{staff.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Target size={14} className="text-emerald-600" strokeWidth={2.5} /> Lead Source*
                    </label>
                    <select name="lead_source_id" value={formData.lead_source_id} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Lead Source --</option>
                      {meta?.lead_sources?.map((ls: any) => <option key={ls.id} value={ls.id}>{ls.source_name}</option>)}
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
                      <MapPin size={14} className="text-orange-500" strokeWidth={2.5} /> Coming From*
                    </label>
                    <input type="text" name="coming_from" value={formData.coming_from} onChange={handleChange} required placeholder="Starting location" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Clock size={14} className="text-orange-500" strokeWidth={2.5} /> Total Days*
                    </label>
                    <input type="number" name="total_days" value={formData.total_days} onChange={handleChange} required placeholder="Days" min="1" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Calendar size={14} className="text-orange-500" strokeWidth={2.5} /> From Date*
                    </label>
                    <input type="date" name="from_date" value={formData.from_date} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Calendar size={14} className="text-orange-500" strokeWidth={2.5} /> To Date*
                    </label>
                    <input type="date" name="to_date" value={formData.to_date} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
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
                    <input type="number" name="adult" value={formData.adult} onChange={handleChange} required min="1" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                      <Baby size={14} className="text-red-500" strokeWidth={2.5} /> Childrens (6-12)
                    </label>
                    <input type="number" name="childrens" value={formData.childrens} onChange={handleChange} min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">Infants (below 5)</label>
                    <input type="number" name="infant" value={formData.infant} onChange={handleChange} min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none" />
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Double Rooms*</label>
                    <input type="number" name="req_double_rooms" value={formData.req_double_rooms} onChange={handleChange} required min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Extra Beds*</label>
                    <input type="number" name="req_extra_beds" value={formData.req_extra_beds} onChange={handleChange} required min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Child w/ Bed (CWB)*</label>
                    <input type="number" name="req_child_with_bed" value={formData.req_child_with_bed} onChange={handleChange} required min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Child w/o Bed (CNB)*</label>
                    <input type="number" name="req_child_without_bed" value={formData.req_child_without_bed} onChange={handleChange} required min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white" />
                  </div>
                </div>
              </div>

              {/* 7. Vehicle & Houseboat Requirements */}
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-[#1e3a5f] mb-5 uppercase tracking-wide">
                    <Car size={16} className="text-[#1e3a5f]" strokeWidth={2.5} /> Vehicle Requirements
                  </h3>
                  <div className="w-full md:w-1/2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Vehicle Type*</label>
                    <select name="vehicle_type" value={formData.vehicle_type} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white">
                      <option value="">-- Select Preferred Vehicle --</option>
                      {meta?.vehicle_types?.map((v: any) => <option key={v.value} value={v.value}>{v.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Houseboat Toggle */}
                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={showHouseboat} onChange={(e) => setShowHouseboat(e.target.checked)} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                  </label>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                     Include Houseboat Requirements?
                  </h3>
                </div>

                {/* Houseboat Expanded Fields */}
                {showHouseboat && (
                  <div className="mt-5 p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl animate-in slide-in-from-top-2 duration-300">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-4 uppercase tracking-wide">
                      <Anchor size={14} strokeWidth={2.5} /> Houseboat Requirements
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[...Array(10)].map((_, i) => {
                        const fieldName = `req_hb_${i + 1}_bed` as keyof typeof formData;
                        return (
                          <div key={i}>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">{i + 1}-Bed</label>
                            <input type="number" name={fieldName} value={formData[fieldName] as number} onChange={handleChange} required={showHouseboat} min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500" />
                          </div>
                        );
                      })}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Extra Beds</label>
                        <input type="number" name="req_hb_extra_beds" value={formData.req_hb_extra_beds} onChange={handleChange} required={showHouseboat} min="0" className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500" />
                      </div>
                    </div>
                  </div>
                )}
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
                    <select name="status" value={formData.status} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500">
                      {meta?.initial_statuses?.map((s: any) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Follow-up Method*</label>
                    <select name="follow_up_method" value={formData.follow_up_method} onChange={handleChange} required className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none bg-white focus:ring-1 focus:ring-blue-500">
                      <option value="call">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                      <option value="meeting">Meeting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
                    <MessageSquare size={14} className="text-blue-500" strokeWidth={2.5} /> Follow-up Note / Remarks
                  </label>
                  <textarea 
                    ref={textareaRef}
                    onInput={handleTextareaInput}
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    rows={3} 
                    placeholder="Enter conversation details or client requirement notes..." 
                    className="w-full text-xs font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-2.5 outline-none resize-none overflow-hidden placeholder:text-gray-400 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

            </form>
          </div>
        )}

        {/* Modal Footer */}
        <div className="bg-white border-t border-gray-200 p-4 flex items-center justify-end gap-3 shrink-0 rounded-b-xl">
          <button type="button" onClick={onClose} disabled={loading} className="px-6 py-2 rounded-lg border-2 border-indigo-100 text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-colors cursor-pointer">
            ✖ Cancel
          </button>
          <button type="submit" form="add-query-form" disabled={loading || metaLoading} className="px-6 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <FileText size={14} strokeWidth={2.5} />}
            {loading 
              ? (editData ? 'Updating...' : 'Saving...') 
              : (editData ? 'Update Query' : 'Save Query')
            }
          </button>
        </div>

      </div>
    </div>
  );
}