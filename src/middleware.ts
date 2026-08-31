// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || '';
  const pathname = url.pathname;
  
  const isDevelopment = process.env.NODE_ENV === 'development';

  // ==========================================
  // 1. DYNAMIC AUTHENTICATION CHECK
  // ==========================================
  const sessionCookie = req.cookies.get('sessionid');
  const isLoggedInCookie = req.cookies.get('is_logged_in');
  
  const isPublicRoute = pathname === '/' || pathname === '/admin-login';

  // ഒന്നുകിൽ യഥാർത്ഥ sessionid ഉണ്ടാവണം, അല്ലെങ്കിൽ ലോഗിൻ സക്സസ് ആയപ്പോ വെച്ച ഫ്ലാഗ് ഉണ്ടാവണം
  const isAuthenticated = sessionCookie || isLoggedInCookie;

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // ==========================================
  // 2. SMART TENANT ROUTING
  // ==========================================
  const subdomain = host.split('.')[0];
  const ignoredSubdomains = ['localhost', 'www', 'waywego', 'designzo', 'waywego-crm'];

  if (!ignoredSubdomains.includes(subdomain)) {
     return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url));
  } else {
     // ഇത് മെയിൻ ഡൊമെയ്ൻ ആണ്. 
     // Production-ൽ വെറുതെ മെയിൻ URL അടിച്ചാൽ റീഡയറക്ട് ചെയ്യുക.
     if (pathname === '/' && !isDevelopment) {
         return NextResponse.redirect('https://www.waywego.in'); 
     }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};