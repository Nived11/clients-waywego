import { VehicleMain } from "@/features/vehicles/VehicleMain";

export const metadata = {
  title: 'Vehicles | CRM',
  description: 'Manage all vehicles, types, availability and documents',
};

export default async function VehiclesPage({ params }: { params: Promise<{ tenant: string }> }) {
  const resolvedParams = await params;
  return <VehicleMain tenantName={resolvedParams.tenant} />;
}