"use client";

import { Edit2, Plus, Trash2, Lock, Minus, Cloud, MoreVertical } from "lucide-react";
import Pagination from "@/components/ui/Pagination"; 

interface AuditTableProps {
  logs: any[];
  loading: boolean;
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function AuditTable({ logs, loading, page, limit, totalCount, onPageChange }: AuditTableProps) {

  const getActionBadge = (type: string, action: string) => {
    const t = type?.toLowerCase() || '';
    switch (t) {
      case 'update': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold"><Edit2 size={10} strokeWidth={3}/> {action || 'Update'}</span>;
      case 'create': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold"><Plus size={10} strokeWidth={3}/> {action || 'Create'}</span>;
      case 'delete': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-500 rounded text-[10px] font-bold"><Trash2 size={10} strokeWidth={3}/> {action || 'Delete'}</span>;
      case 'login': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[10px] font-bold"><Lock size={10} strokeWidth={3}/> {action || 'Login'}</span>;
      case 'export': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-600 rounded text-[10px] font-bold"><Minus size={10} strokeWidth={3}/> {action || 'Export'}</span>;
      case 'backup': return <span className="flex items-center w-fit gap-1.5 px-2.5 py-1 bg-cyan-50 text-cyan-600 rounded text-[10px] font-bold"><Cloud size={10} strokeWidth={3}/> {action || 'Backup'}</span>;
      default: return <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold">{action || type || 'Log'}</span>;
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto w-full flex-1 min-h-[300px]">
        <table className="w-full text-left text-[11px] min-w-[1150px]">
          <thead className="bg-gray-50/80 text-gray-600 font-semibold border-b border-gray-100">
            <tr>
              <th className="py-4 px-4 whitespace-nowrap min-w-[170px]">Time</th>
              <th className="py-4 px-4 min-w-[160px]">User</th>
              <th className="py-4 px-4 min-w-[100px]">Action</th>
              <th className="py-4 px-4 min-w-[100px]">Module</th>
              <th className="py-4 px-4 min-w-[140px] whitespace-nowrap">Record</th>
              <th className="py-4 px-4 min-w-[280px]">Details</th>
              <th className="py-4 px-4 min-w-[110px]">IP Address</th>
              <th className="py-4 px-4 w-[50px] text-center"></th>
            </tr>
          </thead>
          
          {loading ? (
            <tbody className="divide-y divide-gray-50">
              {/* Skeleton Loading Rows */}
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="animate-pulse bg-white">
                  <td className="py-4 px-4"><div className="w-32 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0"></div>
                      <div>
                        <div className="w-24 h-4 bg-gray-200 rounded mb-1.5"></div>
                        <div className="w-12 h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4"><div className="w-16 h-6 bg-gray-200 rounded-md"></div></td>
                  <td className="py-4 px-4"><div className="w-16 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4"><div className="w-24 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4"><div className="w-full max-w-[200px] h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4"><div className="w-20 h-4 bg-gray-200 rounded"></div></td>
                  <td className="py-4 px-4 text-center"><div className="w-4 h-4 bg-gray-200 rounded mx-auto"></div></td>
                </tr>
              ))}
            </tbody>
          ) : logs.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={8} className="py-16 text-center text-gray-600 font-medium text-sm">
                  No audit logs found for your search/filters.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-50">
              {logs.map((row, idx) => {
                const actionType = row.action?.toLowerCase() || 'unknown';
                const actionDisplay = row.action_display || row.action;
                
                const userName = row.user?.name || row.actor_name || 'System';
                const userRole = row.user?.role || 'User';
                const userAvatar = row.user?.avatar; 
                // Avatar null ആണെങ്കിൽ കാണിക്കാൻ വേണ്ടിയുള്ള initials
                const userInitials = row.user?.initials || userName.substring(0, 2).toUpperCase();

                return (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-gray-600 whitespace-nowrap">
                      {row.formatted_time || row.created_at}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        {/* Avatar Image ഓർ Initials Badge */}
                        {userAvatar ? (
                          <img src={userAvatar} alt={userName} className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-100" />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center text-[10px] font-bold shrink-0">
                            {userInitials}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-gray-800 text-[11px] whitespace-nowrap">{userName}</p>
                          <p className="text-[10px] text-gray-600 font-semibold whitespace-nowrap">{userRole}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{getActionBadge(actionType, actionDisplay)}</td>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.module}</td>
                    
                    {/* Record - Whitespace nowrap added */}
                    <td className="py-3 px-4 font-semibold text-blue-600 hover:underline cursor-pointer whitespace-nowrap  max-w-[200px]" title={row.record || row.object_label}>
                      {row.record || row.object_label || '-'}
                    </td>
                    
                    <td className="py-3 px-4 text-gray-600 pr-8 font-medium">{row.details || row.message || '-'}</td>
                    <td className="py-3 px-4 font-medium text-gray-600">{row.ip_address || '-'}</td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-600 hover:text-gray-700 transition-colors cursor-pointer"><MoreVertical size={14}/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {/* Reusable Pagination Component */}
      <Pagination 
        page={page} 
        limit={limit} 
        totalCount={totalCount} 
        onPageChange={onPageChange} 
      />
    </div>
  );
}