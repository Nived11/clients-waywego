import { HelpMain } from "@/features/help/HelpMain";

export const metadata = {
  title: 'Need Help? | CRM',
  description: 'Find answers, learn how to use the system, or get in touch with our support team.',
};

export default async function HelpPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params;
  return <HelpMain />;
}