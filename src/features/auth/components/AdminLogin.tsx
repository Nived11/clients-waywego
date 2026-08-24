"use client";

import { ShieldCheck, Mail, Lock } from "lucide-react";

export const AdminLogin = ({ tenantName }: { tenantName: string }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        
        {/* Header Area (Dark theme for Admin feel) */}
        <div className="bg-slate-900 px-8 py-10 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border border-slate-700 mb-4 text-blue-400">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white capitalize">
            {tenantName} Admin
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Secure portal for workspace administrators
          </p>
        </div>

        {/* Form Area */}
        <div className="p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Username / Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Username or Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="admin@example.com" 
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
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm mt-4 flex items-center justify-center gap-2"
            >
              Sign In to Admin Portal
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