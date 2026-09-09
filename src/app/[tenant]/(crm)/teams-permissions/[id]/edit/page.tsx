import UserForm from "@/features/teams-permissions/components/UserForm";

export const metadata = {
  title: 'Edit User | CRM',
  description: 'Edit team member account',
};

export default async function EditUserPage({ params }: { params: Promise<{ tenant: string, id: string }> }) {
  await params;
  return <UserForm isEditMode={true} />;
}