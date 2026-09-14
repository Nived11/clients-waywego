import DestinationForm from "@/features/destinations/components/DestinationForm";

export const metadata = {
  title: 'Edit Destination | CRM',
  description: 'Edit destination details',
};

export default async function EditDestinationPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  const resolvedParams = await params;
  const destinationId = resolvedParams.id; 
  
  return (
    <DestinationForm isEditMode={true} destinationId={destinationId} />
  );
}