import { api } from '@/lib/api';

// 1. വെഹിക്കിൾ ലിസ്റ്റ് ഫെച്ച് ചെയ്യാൻ (Search, Filters, Pagination ഉൾപ്പെടെ)
export const getVehicles = async (params: any) => {
  try {
    const response = await api.get('/api/v1/tenant/vehicles/', { params });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 2. വെഹിക്കിൾ സ്റ്റാറ്റിസ്റ്റിക്സ് (Top 5 Cards & Donut Breakdown)
export const getVehicleStats = async () => {
  try {
    const response = await api.get('/api/v1/tenant/vehicles/stats/');
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 3. ഫിൽട്ടർ ഓപ്ഷനുകൾ (Dropdowns)
export const getVehicleFilterOptions = async () => {
  try {
    const response = await api.get('/api/v1/tenant/vehicles/filter-options/');
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 4. ഒറ്റ വെഹിക്കിളിന്റെ വിവരങ്ങൾ (Edit ചെയ്യുമ്പോൾ ഡാറ്റ ഫെച്ച് ചെയ്യാൻ)
export const getVehicle = async (id: string | number) => {
  try {
    const response = await api.get(`/api/v1/tenant/vehicles/${id}/`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 5. പുതിയ വെഹിക്കിൾ ആഡ് ചെയ്യാൻ (Create)
export const createVehicle = async (formData: FormData) => {
  try {
    const response = await api.post('/api/v1/tenant/vehicles/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 6. വെഹിക്കിൾ അപ്ഡേറ്റ് ചെയ്യാൻ (Update)
export const updateVehicle = async (id: string | number, formData: FormData) => {
  try {
    const response = await api.patch(`/api/v1/tenant/vehicles/${id}/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 7. വെഹിക്കിൾ ഡിലീറ്റ് ചെയ്യാൻ (Delete)
export const deleteVehicle = async (id: string | number) => {
  try {
    const response = await api.delete(`/api/v1/tenant/vehicles/${id}/`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};