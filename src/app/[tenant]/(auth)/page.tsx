import { StaffLogin } from "@/features/auth/components/StaffLogin";
import { notFound } from 'next/navigation'; // Next.js nte inbuilt 404 page

// Ithu nammude Dummy API function (Python API varunnathu vare ithu use cheyyam)
const checkTenantExists = async (tenantName: string) => {
  // Oru 1 second delay kodukkunnu (Real API call-nte time delay simulate cheyyan)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Ippol nammude system-l cash koduthu vangiye 2 clients mathram undennu vekkuka
  const validTenants = ['travelhope', 'demo'];

  // URL-l vanna peru ee array-l undenkil 'true' return cheyyum
  return validTenants.includes(tenantName);
};

export default async function TenantPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  const tenant = resolvedParams.tenant;

  // Dummy API call cheyyunnu
  const isValidTenant = await checkTenantExists(tenant);

  // Client database-l illenkil (false aayenkil), 404 page kanikkum
  if (!isValidTenant) {
    notFound(); 
  }

  // Client undenkil nammude Login page kanikkum
  return <StaffLogin tenantName={tenant} />;
}