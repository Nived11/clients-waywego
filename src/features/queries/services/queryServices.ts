import { api } from '@/lib/api'; 

export const getQueryStats = async () => {
  try {
    const response = await api.get('/api/v1/tenant/queries/stats/');
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch query stats');
  }
};

export const getQueriesList = async (params: any) => {
  try {
    const response = await api.get('/api/v1/tenant/queries/', { params });
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch queries list');
  }
};

export const getQueryMeta = async () => {
  try {
    const response = await api.get('/api/v1/tenant/queries/meta/');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch meta options');
  }
};

export const createQuery = async (data: any) => {
  try {
    const response = await api.post('/api/v1/tenant/queries/', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create query');
  }
};

// 🔥 PUT/PATCH Request for Edit
export const updateQuery = async (id: number | string, data: any) => {
  try {
    const response = await api.patch(`/api/v1/tenant/queries/${id}/`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update query');
  }
};