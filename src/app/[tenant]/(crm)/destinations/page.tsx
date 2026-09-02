// src/app/[tenant]/(crm)/destinations/page.tsx

import { DestinationMain } from "@/features/destinations/DestinationMain";

// Page metadata set cheyyam
export const metadata = {
  title: 'Destinations | CRM',
  description: 'Manage travel destinations',
};

export default async function DestinationsPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve cheyyunnu (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return <DestinationMain tenantName={resolvedParams.tenant} />;
}