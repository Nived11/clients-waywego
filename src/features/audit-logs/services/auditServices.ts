import { api } from '@/lib/api';

export const getAuditStats = async () => {
  try {
    const response = await api.get('/api/v1/tenant/audit-logs/stats/');
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch audit stats');
  }
};

export const getAuditLogs = async (params: any) => {
  try {
    const response = await api.get('/api/v1/tenant/audit-logs/', { params });
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch audit logs');
  }
};