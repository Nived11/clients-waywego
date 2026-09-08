import VehicleForm from "@/features/vehicles/components/VehicleForm";

export const metadata = {
  title: 'Add New Vehicle | CRM',
  description: 'Add a new vehicle to the CRM',
};

export default async function AddVehiclePage({ params }: { params: Promise<{ tenant: string }> }) {
  await params; 
  return <VehicleForm isEditMode={false} />;
}