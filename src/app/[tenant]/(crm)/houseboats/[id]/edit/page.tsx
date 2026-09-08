import HouseboatForm from "@/features/houseboats/components/HouseboatForm";

export const metadata = {
  title: 'Edit Houseboat | CRM',
  description: 'Edit houseboat details',
};

export default async function EditHouseboatPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <HouseboatForm isEditMode={true} />;
}