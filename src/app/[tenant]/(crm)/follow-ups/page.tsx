import { FollowUpsMain } from "@/features/follow-ups//FollowUpsMain";

export const metadata = {
  title: "Today's Follow-ups | CRM",
  description: "Track pending callbacks, reminders, and customer follow-up tasks.",
};

export default async function FollowUpsPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params;
  return <FollowUpsMain />;
}