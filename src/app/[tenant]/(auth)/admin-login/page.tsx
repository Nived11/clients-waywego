import { AdminLogin } from "@/features/auth/components/AdminLogin";

export default async function AdminLoginPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  
  // Protected by layout.tsx!
  return <AdminLogin tenantName={resolvedParams.tenant} />;
}