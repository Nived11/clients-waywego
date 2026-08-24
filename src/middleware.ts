import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host') || ''; 

  console.log("👉 Requested Host:", host);

  // Vercel-l host cheyyumbol ulla domain automatically edukkan ulla logic
  // 'localhost:3000' local-l work aavum, allengil Vercel URL work aavum.
  // Note: Nammal Vercel-l add cheyyunna root domain (eg: my-crm.vercel.app) ivide replace cheyyuka
  const isProduction = process.env.NODE_ENV === 'production';
  // VERCEL_URL is automatically provided by vercel. We can use it or hardcode for demo.
  // Sir-nu kanikkan namukku oru ENV variable use cheyyam.
  const rootDomain = isProduction ? process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'waywego.in' : 'localhost:3000';

  // Host-um rootDomain-um oreyannamenkil (subdomain illenkil) - Main site aanu!
  if (host === rootDomain || host === `www.${rootDomain}`) {
    console.log("🏠 Serving Main Site");
    return NextResponse.next();
  }

  // Subdomain clean aayi extract cheyyunnu 
  const subdomain = host.replace(`.${rootDomain}`, '');

  if (subdomain && subdomain !== 'www' && subdomain !== host) {
    console.log("✅ Rewriting to Tenant:", subdomain);
    return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};