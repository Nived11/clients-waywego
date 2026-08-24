import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';

  // 1. URL-il '?tenant=...' undenkil athu edukkunnu
  let tenant = url.searchParams.get('tenant');

  if (tenant) {
    console.log("🎯 Demo Tenant Mode (Saving to Cookie):", tenant);
    // Tenant page-lekku route cheyyunnu, koode athu oru Cookie aayi save cheyyunnu!
    const response = NextResponse.rewrite(new URL(`/${tenant}${url.pathname}`, req.url));
    response.cookies.set('demo_tenant', tenant, { path: '/' });
    return response;
  }

  // 2. URL-il illenkil, nammal nerathe save cheytha Cookie undenkil athu edukkunnu
  tenant = req.cookies.get('demo_tenant')?.value;

  // Vercel-l aanu run cheyyunnathu enkil mathram ee cookie trick use cheyyuka
  if (tenant && host.includes('vercel.app')) {
    return NextResponse.rewrite(new URL(`/${tenant}${url.pathname}`, req.url));
  }

  // 3. Normal Localhost Logic (Ningalkku local aayi run cheyyan)
  const isLocal = host.includes('localhost');
  if (isLocal) {
    const subdomain = host.split('.')[0];
    if (subdomain !== 'localhost' && subdomain !== 'www') {
       return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
    }
  }

  // Tenant onnum kittiyillenkil normal main site kanikkum
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};