import { SupplierMain } from "@/features/suppliers/SupplierMain";

// Page metadata set cheyyam
export const metadata = {
  title: 'Suppliers | CRM',
  description: 'Manage all travel suppliers and business partners',
};

export default async function SuppliersPage({ params }: { params: Promise<{ tenant: string }> }) {
  // Params resolve cheyyunnu (Next.js 15+ standard)
  const resolvedParams = await params;
  
  return <SupplierMain />;
}