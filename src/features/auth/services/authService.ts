import { api } from '@/lib/api';

export const authService = {
  getCSRFToken: async () => {
    return await api.get('/api/auth/csrf/'); 
  },

  login: async (credentials: any) => {
    const response = await api.post('/api/auth/login/', credentials);
    return response.data;
  },

  // Logout API
  logout: async () => {
    const csrfResponse = await api.get('/api/auth/csrf/');
    const token = csrfResponse.data.csrfToken; 
    
    if (token) {
      api.defaults.headers.common['X-CSRFToken'] = token;
    }

    const response = await api.post('/api/auth/logout/');
    return response.data;
  }
};