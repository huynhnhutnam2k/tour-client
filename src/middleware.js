import { NextResponse } from "next/server";
import { redirectApi } from "./services";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico|favicon.png (favicon file)
     * - logo.png|logo.jpg (logo file)
     * - robots.txt (robot file)
     */
    "/((?!api|_next|assets|favicon.*|logo.*|robots.txt).*)",
  ],
};

export async function middleware(request) {
  const url = new URL(request.url);
  const host = request.headers.get("host") || url.host;

//   if (url.protocol !== 'https') {
//     const newUrl = `https://${host}${url.pathname}${url.search}`;

//     return NextResponse.redirect(newUrl, 302);
//   }

  const redirect = await redirectApi.server.getRedirectByUrl(url.pathname);
  if (redirect) {
    let destination = redirect.destination;
    if (!/^https?\:/.test(destination)) {
      destination = url.protocol + "//" + host + destination;
    }

    return NextResponse.redirect(destination, redirect.code);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  requestHeaders.set("x-protocol", url.protocol);
  requestHeaders.set("x-port", url.port);
  requestHeaders.set("x-host", host);
  requestHeaders.set("x-domain", url.protocol + "//" + host);
  requestHeaders.set("x-pathname", url.pathname);
  requestHeaders.set("x-search", url.search);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
