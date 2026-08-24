import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6 flex flex-col">
          
          {/* Page Content (Dashboard, Leads etc) */}
          <div className="flex-1">
            {children}
          </div>
          
          {/* Global Footer */}
          <div className="flex justify-between items-center pt-6 mt-8 border-t border-gray-200 text-xs text-gray-500 font-medium">
            <p>
              Way We Go CRM <span className="mx-2">•</span> Powered by <span className="text-blue-600 font-bold tracking-wider">KAELIXO</span>
            </p>
            <p className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">
              Last updated: Just now <span className="text-base leading-none">⟳</span>
            </p>
          </div>
          
        </main>
      </div>
    </div>
  );
}