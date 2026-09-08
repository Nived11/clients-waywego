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
});

// 🔥 CSRF ടോക്കൺ മെമ്മറിയിൽ സൂക്ഷിക്കാൻ ഒരു വേരിയബിൾ (ഒരു തവണ എടുത്താൽ പിന്നെ വീണ്ടും API വിളിക്കാതിരിക്കാൻ)
let cachedCsrfToken: string | null = null;

api.interceptors.request.use(async (config) => {
  config.baseURL = getDynamicBaseURL();

  // POST, PUT, PATCH, DELETE റിക്വസ്റ്റുകൾക്ക് മാത്രം CSRF ടോക്കൺ എടുക്കുന്നു
  if (config.method && ['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
    
    // ടോക്കൺ ഇതിനകം ഇല്ലെങ്കിൽ മാത്രം API കോൾ ചെയ്ത് എടുക്കുന്നു
    if (!cachedCsrfToken) {
      try {
        // (ശ്രദ്ധിക്കുക: ഇൻഫിനിറ്റ് ലൂപ്പ് ഒഴിവാക്കാൻ ഇവിടെ നേരിട്ട് axios.get വിളിക്കുന്നു)
        const response = await axios.get(`${config.baseURL}/api/auth/csrf/`, {
          withCredentials: true
        });
        
        // നിങ്ങളുടെ ബാക്കെൻഡ് റെസ്പോൺസ് അനുസരിച്ച് csrfToken അല്ലെങ്കിൽ csrf_token എടുക്കുന്നു
        cachedCsrfToken = response.data.csrfToken || response.data.csrf_token;
      } catch (err) {
        console.error("Failed to fetch CSRF token automatically", err);
      }
    }

    // കിട്ടിയ ടോക്കൺ കൃത്യമായി ഹെഡറിൽ വെച്ച് കൊടുക്കുന്നു
    if (cachedCsrfToken) {
      config.headers['X-CSRFToken'] = cachedCsrfToken;
    }
  }

  return config;
});