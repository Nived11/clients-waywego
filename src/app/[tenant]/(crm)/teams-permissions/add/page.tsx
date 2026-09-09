import UserForm from "@/features/teams-permissions/components/UserForm";

export const metadata = {
  title: 'Add New User | CRM',
  description: 'Create a new team member account',
};

export default async function AddUserPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params; 
  return <UserForm isEditMode={false} />;
}