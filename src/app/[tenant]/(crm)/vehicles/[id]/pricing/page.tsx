import VehiclePricing from "@/features/vehicles/components/VehiclePricing";

export const metadata = {
  title: 'Vehicle Pricing | CRM',
  description: 'Set vehicle pricing based on kilometres with different slabs.',
};

export default async function VehiclePricingPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <VehiclePricing />;
}