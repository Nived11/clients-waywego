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