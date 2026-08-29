// src/app/[tenant]/layout.tsx
import { notFound } from 'next/navigation'; 

// Backend API call cheyyunna function
const checkTenantExists = async (tenantName: string) => {
  try {
    const baseDomain = process.env.NEXT_PUBLIC_API_DOMAIN || 'waywego.in';
    const apiUrl = `https://${tenantName}.${baseDomain}/api/public/check-subdomain/?subdomain=${tenantName}`;
    
    // API Call
    const response = await fetch(apiUrl, { cache: 'no-store' });
    const data = await response.json();
    
    // API response-l success: true and exists: true aano ennu check cheyyunnu
    return data.success === true && data.exists === true;
  } catch (error) {
    console.error("Error checking tenant:", error);
    return false;
  }
};

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ tenant: string }>;
}) {
  const resolvedParams = await params;
  const tenant = resolvedParams.tenant;

  // 1. Real backend API call cheyyunnu
  const isValidTenant = await checkTenantExists(tenant);

  // 2. Backend "No" paranjal, 404 page kanikkum
  if (!isValidTenant) {
    notFound(); 
  }

  // 3. Valid tenant aanenkil mathram ullilulla pages (Login, Dashboard) kanikkum
  return <>{children}</>;
}