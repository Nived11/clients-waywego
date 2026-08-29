// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';
  const pathname = url.pathname;

  // ==========================================
  // 1. AUTHENTICATION CHECK
  // ==========================================
  // ⚠️ TODO (PRODUCTION DEPLOYMENT CHECKLIST) ⚠️
  // 1. Remove 'isLoggedIn' variable.
  // 2. Remove 'isLoggedIn' from the IF conditions below.
  // 3. Keep ONLY 'sessionCookie' for authentication logic.
  // ==========================================
  const sessionCookie = req.cookies.get('sessionid');
  const isLoggedIn = req.cookies.get('is_logged_in'); 
  
  const isPublicRoute = pathname === '/' || pathname === '/admin-login';

  if (!sessionCookie && !isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if ((sessionCookie || isLoggedIn) && isPublicRoute) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // ==========================================
  // 2. SMART TENANT ROUTING (Local, Vercel, Prod)
  // ==========================================
  
  // SCENARIO A: Vercel Free Tier Environment (?tenant=travelhope)
  if (host.includes('vercel.app')) {
    // TypeScript type fix: string | null | undefined
    let vercelTenant: string | null | undefined = url.searchParams.get('tenant');
    
    if (vercelTenant) {
      // URL-l param undenkil cookie-l save cheythu rewrite cheyyunnu
      const response = NextResponse.rewrite(new URL(`/${vercelTenant}${pathname}`, req.url));
      response.cookies.set('vercel_tenant', vercelTenant, { path: '/' });
      return response;
    }
    
    // URL-l illenkil cookie-l ninnu eduthu rewrite cheyyunnu
    vercelTenant = req.cookies.get('vercel_tenant')?.value;
    if (vercelTenant) {
      return NextResponse.rewrite(new URL(`/${vercelTenant}${pathname}`, req.url));
    }
  } 
  
  // SCENARIO B: Localhost & Production Live Domains (travelhope.localhost / travelhope.waywego.in)
  else {
    const subdomain = host.split('.')[0];
    
    // Main domain, localhost, www allengil mathram subdomain aayi kooti rewrite cheyyuka
    if (subdomain !== 'localhost' && subdomain !== 'www' && subdomain !== 'waywego') {
       return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};