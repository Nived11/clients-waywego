import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';

  // 1. TypeScript Error Fix: Explicit aayi type parayunnu
  let tenant: string | null | undefined = url.searchParams.get('tenant');

  if (tenant) {
    console.log("🎯 Demo Tenant Mode (Saving to Cookie):", tenant);
    const response = NextResponse.rewrite(new URL(`/${tenant}${url.pathname}`, req.url));
    response.cookies.set('demo_tenant', tenant, { path: '/' });
    return response;
  }

  // 2. Ippo error varilla, karanam 'undefined' accept cheyyum
  tenant = req.cookies.get('demo_tenant')?.value;

  if (tenant && host.includes('vercel.app')) {
    return NextResponse.rewrite(new URL(`/${tenant}${url.pathname}`, req.url));
  }

  // 3. Normal Localhost Logic
  const isLocal = host.includes('localhost');
  if (isLocal) {
    const subdomain = host.split('.')[0];
    if (subdomain !== 'localhost' && subdomain !== 'www') {
       return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};