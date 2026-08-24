"use client";

import { Users, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export const StaffLogin = ({ tenantName }: { tenantName: string }) => {
  const router = useRouter();

  // Login button click cheyyumpol work aavunna function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    // API verification okke pinne add cheyyam, ippo direct dashboard-lekku vidunnu
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        
        {/* Header Area (Blue theme for Staff) */}
        <div className="bg-blue-600 px-8 py-10 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 border border-blue-400 mb-4 text-white shadow-sm">
            <Users size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white capitalize">
            {tenantName}
          </h1>
          <p className="text-blue-100 mt-2 text-sm">
            Staff & Manager Login Portal
          </p>
        </div>

        {/* Form Area */}
        <div className="p-8">
          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* Username / Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="staff@example.com" 
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
        
        {/* Footer Area */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            System powered by <span className="font-bold text-gray-700">KAELIXO</span>
          </p>
        </div>
        
      </div>
    </div>
  );
};