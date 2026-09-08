import { HouseboatMain } from "@/features/houseboats/HouseboatMain";

export const metadata = {
  title: 'Houseboats | CRM',
  description: 'Manage houseboats, categories, amenities and pricing',
};

export default async function HouseboatsPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  return <HouseboatMain tenantName={resolvedParams.tenant} />;
}