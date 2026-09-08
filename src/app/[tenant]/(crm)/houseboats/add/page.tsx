import HouseboatForm from "@/features/houseboats/components/HouseboatForm";

export const metadata = {
  title: 'Add New Houseboat | CRM',
  description: 'Add a new houseboat to the CRM',
};

export default async function AddHouseboatPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params; 
  return <HouseboatForm isEditMode={false} />;
}