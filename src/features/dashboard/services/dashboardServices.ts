// dashboard/services/dashboardServices
import { api } from '@/lib/api'; // നിങ്ങളുടെ മെയിൻ axios instance

export const getDashboardData = async () => {
  try {
    const response = await api.get('/api/dashboard/');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch dashboard data');
  }
};