// dashboard/components/DashboardError.tsx
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function DashboardError({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <div className="bg-red-50 p-4 rounded-full mb-4">
        <AlertCircle size={40} className="text-red-500" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Failed to load Dashboard</h2>
      <p className="text-gray-500 mb-6">{error}</p>
      <button 
        onClick={onRetry}
        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        <RefreshCcw size={18} />
        <span>Try Again</span>
      </button>
    </div>
  );
}