import { QueryMain } from "@/features/queries/QueryMain";

export const metadata = {
  title: 'Queries | CRM',
  description: 'Manage client queries',
};

export default async function QueriesPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve cheyyunnu (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return <QueryMain tenantName={resolvedParams.tenant} />;
}