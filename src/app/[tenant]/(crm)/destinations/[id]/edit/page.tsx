// src/app/[tenant]/(crm)/destinations/[id]/edit/page.tsx

import DestinationForm from "@/features/destinations/components/DestinationForm";

// മെറ്റാഡാറ്റ
export const metadata = {
  title: 'Edit Destination | CRM',
  description: 'Edit destination details',
};

// Next.js 15 ൽ params ഒരു Promise ആണ്, അത് await ചെയ്യണം
export default async function EditDestinationPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  const resolvedParams = await params;
  
  // URL ൽ നിന്നും കിട്ടുന്ന ID (അല്ലെങ്കിൽ slug)
  const destinationId = resolvedParams.id;
  
  // NOTE: ബാക്കെൻഡ് റെഡിയാവുമ്പോൾ ഈ `destinationId` വെച്ച് ഡാറ്റാബേസിൽ നിന്ന് 
  // ആ ഡെസ്റ്റിനേഷന്റെ വിവരങ്ങൾ (name, description, etc) ഫെച്ച് ചെയ്യാം. 
  // അതിനുശേഷം ആ ഡാറ്റ `<DestinationForm initialData={data} isEditMode={true} />` ആയി പാസ്സ് ചെയ്യാം.
  // നിലവിൽ UI ഡിസൈനിനു വേണ്ടി നമ്മൾ വെറുതെ ഫോം എഡിറ്റ് മോഡിൽ വിളിക്കുന്നു.

  return (
    <DestinationForm isEditMode={true} />
  );
}