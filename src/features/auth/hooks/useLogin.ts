// src/features/auth/hooks/useAuth.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';
import { api } from '@/lib/api'; 

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (credentials: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const csrfResponse = await api.get('/api/auth/csrf/');
      const token = csrfResponse.data.csrfToken; 

      if (token) {
        api.defaults.headers.common['X-CSRFToken'] = token;
      }

      const data = await authService.login(credentials);
      
      // ലോഗിൻ ശരിക്കും സക്സസ് ആയാൽ മാത്രം!
      if (data.success) {
        // ==========================================
        // FRONTEND AUTH FLAG 
        // Backend ഒറിജിനൽ sessionid സെറ്റ് ചെയ്തത് കൊണ്ട്,
        // Middleware-ന് മനസ്സിലാവാൻ ഈ ഗേറ്റ് പാസ്സ് കുക്കി സെറ്റ് ചെയ്യുന്നു.
        // ==========================================
        document.cookie = "is_logged_in=true; path=/; max-age=86400;"; 
        
        router.push('/dashboard'); 
      } else {
        setError(data.message || 'Login failed');
      }
      
    } catch (err: any) {
       setError(err.response?.data?.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};