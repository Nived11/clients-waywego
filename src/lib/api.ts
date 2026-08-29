// src/lib/api.ts
import axios from 'axios';

const getDynamicBaseURL = () => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const subdomain = host.split('.')[0];
    
    const baseDomain = process.env.NEXT_PUBLIC_API_DOMAIN || 'waywego.in';

    // Backend local server-l (e.g., localhost:8000) aanenkil HTTP mathi
    if (baseDomain.includes('localhost') || baseDomain.includes('127.0.0.1')) {
      return `http://${subdomain}.${baseDomain}`;
    }

    // Backend live (waywego.in) aanenkil nirbandhamayum HTTPS venam
    return `https://${subdomain}.${baseDomain}`;
  }
  return 'https://waywego.in';
};

export const api = axios.create({
  withCredentials: true,
  
  // 🔥 THE MAGIC: Axios automatic aayi 'csrftoken' cookie eduthu 'X-CSRFToken' header-l set cheyyum! (Same-domain aakumbol)
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

api.interceptors.request.use((config) => {
  config.baseURL = getDynamicBaseURL();
  return config;
});