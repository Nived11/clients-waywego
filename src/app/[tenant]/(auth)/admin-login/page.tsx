import { AdminLogin } from "@/features/auth/components/AdminLogin";

export default async function AdminPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  return <AdminLogin tenantName={resolvedParams.tenant} />;
}