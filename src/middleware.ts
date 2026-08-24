import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';

  // 1. FREE DEMO TRICK: URL-l '?tenant=peru' undenkil athu edukkunnu
  const demoTenant = url.searchParams.get('tenant');
  
  if (demoTenant) {
    console.log("🎯 Demo Tenant Mode:", demoTenant);
    // Tenant folder-lekku invisible aayi route cheyyunnu
    return NextResponse.rewrite(new URL(`/${demoTenant}${url.pathname}`, req.url));
  }

  // 2. Normal Localhost Logic (Ningalkku local aayi run cheyyan)
  const isLocal = host.includes('localhost');
  if (isLocal) {
    const subdomain = host.split('.')[0];
    if (subdomain !== 'localhost' && subdomain !== 'www') {
       return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
    }
  }

  // Tenant illenkil normal main site kanikkum
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};