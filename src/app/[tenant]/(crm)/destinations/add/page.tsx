// src/app/[tenant]/(crm)/destinations/add/page.tsx

import DestinationForm from "@/features/destinations/components/DestinationForm";

// ഈ പേജിന്റെ ടൈറ്റിലും മെറ്റാഡാറ്റയും സെറ്റ് ചെയ്യുന്നു
export const metadata = {
  title: 'Add New Destination | CRM',
  description: 'Add a new travel destination to the CRM',
};

export default async function AddDestinationPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve ചെയ്യുന്നു (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return (
    // isEditMode={false} കൊടുക്കുന്നത് വഴി ഇത് 'Add' മോഡിൽ ആണെന്ന് ഫോമിന് മനസ്സിലാകും
    // (default ആയിട്ട് false തന്നെ ആണ്, എങ്കിലും കോഡ് കാണുമ്പോൾ പെട്ടെന്ന് മനസ്സിലാകാൻ കൊടുക്കുന്നതാണ് നല്ലത്)
    <DestinationForm isEditMode={false} />
  );
}