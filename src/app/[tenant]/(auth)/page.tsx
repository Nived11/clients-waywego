// src/app/[tenant]/page.tsx
import { StaffLogin } from "@/features/auth/components/StaffLogin"; 

export default async function StaffPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  
  // API check ippo layout.tsx handle cheyyunnu, so ivide just component vilichal mathi
  return <StaffLogin tenantName={resolvedParams.tenant} />;
}