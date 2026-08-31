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
      
      if (data.success) {
        // ==========================================
        // ENVIRONMENT BASED COOKIE (BEST PRACTICE)
        // Development-ൽ മാത്രം ഈ കുക്കി സെറ്റ് ചെയ്യുക. 
        // Vercel-ൽ (Production) ഇത് റൺ ആവില്ല.
        // ==========================================
        if (process.env.NODE_ENV === 'development') {
            document.cookie = "is_logged_in=true; path=/;"; 
        }
        
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