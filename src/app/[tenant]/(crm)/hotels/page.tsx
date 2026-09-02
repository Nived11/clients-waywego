import { HotelMain } from "@/features/hotels/HotelMain";

// Page metadata set cheyyam
export const metadata = {
  title: 'Hotels | CRM',
  description: 'Manage travel hotels and accommodations',
};

export default async function HotelsPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve cheyyunnu (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return <HotelMain tenantName={resolvedParams.tenant} />;
}