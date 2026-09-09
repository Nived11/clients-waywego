import { TeamPermissionsMain } from "@/features/teams-permissions/TeamPermissionsMain";

export const metadata = {
  title: 'Teams & Permissions | CRM',
  description: 'Manage system users, roles and permissions for your team',
};

export default async function TeamsPermissionsPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params;
  return <TeamPermissionsMain />;
}