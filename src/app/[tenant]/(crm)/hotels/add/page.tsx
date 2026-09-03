import HotelForm from "@/features/hotels/components/HotelForm";

export const metadata = {
  title: 'Add New Hotel | CRM',
  description: 'Add a new hotel to the CRM',
};

export default async function AddHotelPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params; 
  return <HotelForm isEditMode={false} />;
}