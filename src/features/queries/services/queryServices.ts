import { api } from '@/lib/api'; // നിങ്ങളുടെ മെയിൻ axios instance

export const getQueryStats = async () => {
  try {
    const response = await api.get('/api/v1/tenant/queries/stats/');
    return response.data; // നേരെ ഡാറ്റ റിട്ടേൺ ചെയ്യുന്നു
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch query stats');
  }
};