import HouseboatPricing from "@/features/houseboats/components/HouseboatPricing";

export const metadata = {
  title: 'Houseboat Pricing | CRM',
  description: 'Manage houseboat room type prices and availability',
};

export default async function HouseboatPricingPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <HouseboatPricing />;
}