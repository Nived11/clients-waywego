import VehicleForm from "@/features/vehicles/components/VehicleForm";

export const metadata = {
  title: 'Edit Vehicle | CRM',
  description: 'Edit vehicle details',
};

export default async function EditVehiclePage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <VehicleForm isEditMode={true} />;
}