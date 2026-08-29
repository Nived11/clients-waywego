"use client";

import { useState } from "react";
import { Users, User, Lock } from "lucide-react";
import { useLogin } from "../hooks/useLogin";

export const StaffLogin = ({ tenantName }: { tenantName: string }) => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Custom hook-l ninnu login function-um loading/error states-um edukkunnu
  const { login, loading, error } = useLogin(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!username || !password) return;
    
    // API expect cheyyunnathu 'username' aanu (athu email aayalum, normal username aayalum)
    await login({ username, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white md:bg-gray-50">
      
      {/* ========================================================= */}
      {/* LEFT PANEL (Desktop) / TOP HEADER (Mobile) */}
      {/* ========================================================= */}
      <div className="md:w-1/2 bg-blue-800 flex flex-col justify-center items-center relative p-8 md:p-12 overflow-hidden">
        
        {/* Background Decorative SVGs (Visible mostly on Desktop) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
          
          {/* Top Left - Big Perfect Circle */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 border-[24px] border-white/5 rounded-full"></div>

          {/* Bottom Right - Rotated Rounded Square */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-[64px] rotate-45"></div>
          
        </div>

        {/* Branding Area */}
        <div className="z-10 text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-900 border-2 border-blue-400 mb-4 shadow-lg text-white">
            <Users className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white capitalize tracking-tight">
            {tenantName}
          </h1>
          <p className="text-blue-100 mt-2 md:mt-4 text-sm md:text-lg font-medium opacity-90">
            Login Portal
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT PANEL (Desktop) / BOTTOM CONTENT (Mobile) */}
      {/* ========================================================= */}
      <div className="flex-1 md:w-1/2 flex items-center justify-center p-6 md:p-12">
        
        {/* Form Container (Flat on mobile, Card with shadow & rounded-xl on Desktop) */}
        <div className="w-full max-w-md md:bg-white md:shadow-2xl rounded-xl md:border md:border-gray-100 md:p-8">
          
          <div className="hidden md:block mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Please enter your credentials to continue</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* Error Message Alert */}
            {error && (
              <div className="p-3 bg-red-50 text-red-600 border border-red-200 text-sm rounded-xl text-center font-medium animate-pulse">
                {error}
              </div>
            )}

            {/* Username / Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email / Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin or staff@example.com" 
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-md mt-6 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>

          {/* Footer inside the form section */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              System powered by <span className="font-bold text-gray-600 tracking-wider">KAELIXO</span>
            </p>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};