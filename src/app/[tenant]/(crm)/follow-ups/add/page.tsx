import FollowUpForm from "@/features/follow-ups/components//FollowUpForm";

export const metadata = {
  title: 'Add Follow-up | CRM',
  description: 'Add a follow-up for the selected query.',
};

export default async function AddFollowUpPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params; 
  return <FollowUpForm />;
}