import { ItineraryMain } from "@/features/itinerary/ItineraryMain";

// Page metadata set cheyyam
export const metadata = {
  title: 'Itineraries | CRM',
  description: 'Manage client itineraries',
};

export default async function ItineraryPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve cheyyunnu (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return <ItineraryMain tenantName={resolvedParams.tenant} />;
}