import { AuditLogsMain } from "@/features/audit-logs/AuditLogsMain";

export const metadata = {
  title: 'Audit Logs | CRM',
  description: 'Track all system activities and changes for security and compliance.',
};

export default async function AuditLogsPage({ params }: { params: Promise<{ tenant: string }> }) {
  await params;
  return <AuditLogsMain />;
}