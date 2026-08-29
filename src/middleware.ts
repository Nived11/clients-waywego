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
  // 2. SMART TENANT ROUTING (Subdomain based)
  // ==========================================
  
  // host = travelhope.designzo.in -> subdomain = travelhope
  const subdomain = host.split('.')[0];
  
  // മെയിൻ ഡൊമെയ്നുകൾ വന്നാൽ റീഡയറക്ട് ചെയ്യാതിരിക്കാൻ
  // waywego-crm എന്നത് vercel-ൻ്റെ ഡീഫോൾട്ട് url ആണ് (waywego-crm.vercel.app)
  const ignoredSubdomains = ['localhost', 'www', 'waywego', 'designzo', 'waywego-crm'];

  if (!ignoredSubdomains.includes(subdomain)) {
     // ഇത് സബ്-ഡൊമെയ്ൻ ആണ് (ഉദാഹരണത്തിന്: abc, travelhope). അപ്പോൾ ലോഗിൻ പേജ് കാണിക്കുക.
     return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url));
  } else {
     // ഇത് മെയിൻ ഡൊമെയ്ൻ ആണ് (waywego, designzo, vercel url).
     // ആരെങ്കിലും ഈ മെയിൻ URL വെറുതെ അടിച്ചാൽ (അതായത് pathname === '/'), നേരെ മെയിൻ സൈറ്റിലേക്ക് വിടുക.
     // ലോക്കൽ ഡെവലപ്മെന്റ് സമയത്ത് (localhost) ഇത് പ്രവർത്തിക്കാതിരിക്കാൻ ശ്രദ്ധിച്ചിട്ടുണ്ട്.
     if (pathname === '/' && !host.includes('localhost')) {
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