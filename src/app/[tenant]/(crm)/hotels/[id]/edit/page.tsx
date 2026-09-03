import HotelForm from "@/features/hotels/components/HotelForm";

export const metadata = {
  title: 'Edit Hotel | CRM',
  description: 'Edit hotel details',
};

export default async function EditHotelPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <HotelForm isEditMode={true} />;
}