// src/app/[tenant]/(crm)/hotels/[id]/pricing/page.tsx

import HotelPricing from "@/features/hotels/components/HotelPricing";

export const metadata = {
  title: 'Room Type Pricing | CRM',
  description: 'Manage room type pricing and availability',
};

export default async function HotelPricingPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <HotelPricing />;
}