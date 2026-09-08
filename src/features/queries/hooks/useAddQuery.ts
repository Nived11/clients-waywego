import { useState, useEffect } from 'react';
import { getQueryMeta, createQuery, updateQuery } from '../services/queryServices';
// import { showToast } from "@/utils/toast"; 
import { parsePhoneNumber } from "libphonenumber-js"; 

export const useAddQuery = (onSuccess: () => void, editData?: any) => {
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [metaLoading, setMetaLoading] = useState(true);

  const [showHouseboat, setShowHouseboat] = useState(false);
  const [phoneError, setPhoneError] = useState(""); 

  // Initial Form State
  const [formData, setFormData] = useState({
    client_name: '',
    gender: 'mr',
    phone_number: '',
    email: '',
    type: '',
    sector: '',
    coming_from: '',
    from_date: '',
    to_date: '',
    total_days: '',
    adult: 1,
    childrens: 0,
    infant: 0,
    req_double_rooms: 1,
    req_extra_beds: 0,
    req_child_with_bed: 0,
    req_child_without_bed: 0,
    req_hb_1_bed: 0,
    req_hb_2_bed: 0,
    req_hb_3_bed: 0,
    req_hb_4_bed: 0,
    req_hb_5_bed: 0,
    req_hb_6_bed: 0,
    req_hb_7_bed: 0,
    req_hb_8_bed: 0,
    req_hb_9_bed: 0,
    req_hb_10_bed: 0,
    req_hb_extra_beds: 0,
    vehicle_type: '',
    services: '',
    priority: '',
    status: 'new',
    lead_source_id: '',
    assign_id: '',
    remark: '',
    follow_up_method: 'call'
  });

  // 🔥 Edit ഡാറ്റ ഉണ്ടെങ്കിൽ അത് Form-ലേക്ക് സെറ്റ് ചെയ്യുന്നു
  useEffect(() => {
    if (editData) {
      setFormData({
        client_name: editData.client_name || editData.customer?.name || '',
        gender: editData.gender || 'mr',
        phone_number: editData.phone_number || editData.customer?.phone || '',
        email: editData.email || editData.customer?.email || '',
        type: editData.type || '',
        sector: editData.sector || '',
        coming_from: editData.coming_from || '',
        from_date: editData.from_date || '',
        to_date: editData.to_date || '',
        total_days: editData.total_days || '',
        adult: editData.adult || 1,
        childrens: editData.childrens || 0,
        infant: editData.infant || 0,
        req_double_rooms: editData.req_double_rooms || 1,
        req_extra_beds: editData.req_extra_beds || 0,
        req_child_with_bed: editData.req_child_with_bed || 0,
        req_child_without_bed: editData.req_child_without_bed || 0,
        req_hb_1_bed: editData.req_hb_1_bed || 0,
        req_hb_2_bed: editData.req_hb_2_bed || 0,
        req_hb_3_bed: editData.req_hb_3_bed || 0,
        req_hb_4_bed: editData.req_hb_4_bed || 0,
        req_hb_5_bed: editData.req_hb_5_bed || 0,
        req_hb_6_bed: editData.req_hb_6_bed || 0,
        req_hb_7_bed: editData.req_hb_7_bed || 0,
        req_hb_8_bed: editData.req_hb_8_bed || 0,
        req_hb_9_bed: editData.req_hb_9_bed || 0,
        req_hb_10_bed: editData.req_hb_10_bed || 0,
        req_hb_extra_beds: editData.req_hb_extra_beds || 0,
        vehicle_type: editData.vehicle_type || '',
        services: editData.services || '',
        priority: editData.priority || '',
        status: editData.status || 'new',
        lead_source_id: editData.lead_source_id || '',
        assign_id: editData.assign_id || '',
        remark: editData.remark || '',
        follow_up_method: editData.follow_up_method || 'call'
      });

      // ഹൗസ്ബോട്ട് ഫീൽഡുകളിൽ എന്തെങ്കിലും വാല്യൂ ഉണ്ടെങ്കിൽ ടോഗിൾ ഓൺ ആക്കുക
      const hasHouseboat = [1,2,3,4,5,6,7,8,9,10].some(i => editData[`req_hb_${i}_bed`] > 0) || editData.req_hb_extra_beds > 0;
      setShowHouseboat(hasHouseboat);
    }
  }, [editData]);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const data = await getQueryMeta();
        setMeta(data);
      } catch (error) {
        console.error("Failed to load meta options", error);
      } finally {
        setMetaLoading(false);
      }
    };
    fetchMeta();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev: any) => {
      const newData = { ...prev, [name]: value };

      // 1. from_date അല്ലെങ്കിൽ total_days മാറ്റിയാൽ to_date കണ്ടുപിടിക്കുന്നു
      if (name === 'from_date' || name === 'total_days') {
        if (newData.from_date && newData.total_days && Number(newData.total_days) > 0) {
          const startDate = new Date(newData.from_date);
          startDate.setDate(startDate.getDate() + (Number(newData.total_days) - 1));
          newData.to_date = startDate.toISOString().split('T')[0];
        }
      }

      // 🔥 2. പുതിയ ലോജിക്: to_date മാനുവൽ ആയി മാറ്റിയാൽ total_days കണ്ടുപിടിക്കുന്നു
      if (name === 'to_date') {
        if (newData.from_date && newData.to_date) {
          const startDate = new Date(newData.from_date);
          const endDate = new Date(newData.to_date);
          const diffTime = endDate.getTime() - startDate.getTime();
          
          if (diffTime >= 0) {
            // ദിവസങ്ങളുടെ എണ്ണം കാൽക്കുലേറ്റ് ചെയ്യുന്നു (+1 കൊടുക്കുന്നത് starting day കൂടി ഉൾപ്പെടുത്താനാണ്)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            newData.total_days = diffDays.toString();
          } else {
            // അബദ്ധത്തിൽ user ഫ്രം ഡേറ്റിനും മുന്നേയുള്ള ഡേറ്റ് സെലക്ട് ചെയ്താൽ ഡീഫോൾട്ട് ആയി 1 ആക്കി മാറ്റും
            newData.total_days = "1";
            newData.to_date = newData.from_date;
          }
        }
      }

      return newData;
    });
  };

  const handleValueChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (name === 'phone_number') {
      setPhoneError(""); 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(""); 

    if (!formData.phone_number) {
      setPhoneError("Please enter a contact number!");
      return;
    }

    try {
      const phoneNumber = parsePhoneNumber(formData.phone_number);
      if (!phoneNumber || !phoneNumber.isValid()) {
        setPhoneError("Please enter a valid phone number for the selected country!");
        return;
      }
    } catch (error) {
      setPhoneError("Invalid phone number format!");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        total_days: Number(formData.total_days),
        adult: Number(formData.adult),
        childrens: Number(formData.childrens),
        infant: Number(formData.infant),
        req_double_rooms: Number(formData.req_double_rooms),
        req_extra_beds: Number(formData.req_extra_beds),
        req_child_with_bed: Number(formData.req_child_with_bed),
        req_child_without_bed: Number(formData.req_child_without_bed),
        
        req_hb_1_bed: showHouseboat ? Number(formData.req_hb_1_bed) : 0,
        req_hb_2_bed: showHouseboat ? Number(formData.req_hb_2_bed) : 0,
        req_hb_3_bed: showHouseboat ? Number(formData.req_hb_3_bed) : 0,
        req_hb_4_bed: showHouseboat ? Number(formData.req_hb_4_bed) : 0,
        req_hb_5_bed: showHouseboat ? Number(formData.req_hb_5_bed) : 0,
        req_hb_6_bed: showHouseboat ? Number(formData.req_hb_6_bed) : 0,
        req_hb_7_bed: showHouseboat ? Number(formData.req_hb_7_bed) : 0,
        req_hb_8_bed: showHouseboat ? Number(formData.req_hb_8_bed) : 0,
        req_hb_9_bed: showHouseboat ? Number(formData.req_hb_9_bed) : 0,
        req_hb_10_bed: showHouseboat ? Number(formData.req_hb_10_bed) : 0,
        req_hb_extra_beds: showHouseboat ? Number(formData.req_hb_extra_beds) : 0,
        
        lead_source_id: formData.lead_source_id ? Number(formData.lead_source_id) : null,
        assign_id: formData.assign_id ? Number(formData.assign_id) : null,
      };

      if (editData && editData.id) {
        await updateQuery(editData.id, payload);
      } else {
        await createQuery(payload);
      }
      
      onSuccess(); 
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { 
    formData, handleChange, handleValueChange, handleSubmit, 
    meta, loading, metaLoading, 
    showHouseboat, setShowHouseboat,
    phoneError
  };
};