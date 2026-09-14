import { api } from '@/lib/api';

export const createDestination = async (formData: FormData) => {
  try {
    const response = await api.post('/api/v1/tenant/destinations/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getDestinations = async (params: any) => {
  try {
    const response = await api.get('/api/v1/tenant/destinations/', { params });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getDestinationStats = async () => {
  try {
    const response = await api.get('/api/v1/tenant/destinations/stats/');
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getDestination = async (slugOrId: string) => {
  try {
    const response = await api.get(`/api/v1/tenant/destinations/${slugOrId}/`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const updateDestination = async (slugOrId: string, formData: FormData) => {
  try {
    const response = await api.patch(`/api/v1/tenant/destinations/${slugOrId}/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteDestination = async (id: string | number) => {
  try {
    const response = await api.delete(`/api/v1/tenant/destinations/${id}/`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};