import { DashboardMain } from "@/features/dashboard/DashboardMain";

export default async function DashboardPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  
  return <DashboardMain tenantName={resolvedParams.tenant} />;
}