import { NextRequest, NextResponse } from "next/server";

/**
 * A nonce-based CSP rather than 'unsafe-inline' for scripts, because the
 * site does have two legitimate inline <script> tags (the no-flash theme
 * script and JSON-LD) — 'unsafe-inline' would defeat the point of having
 * a script-src policy at all. style-src keeps 'unsafe-inline' because
 * rehype-pretty-code emits syntax-highlighting colors as inline style
 * attributes (CSS custom properties per token) on generated <span>
 * elements; nonce-ing every one of those isn't practical, and inline
 * styles are a far lower-severity vector than inline scripts.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  // Next's dev server (both Webpack and Turbopack) uses eval() for hot
  // module reloading and source maps. Without 'unsafe-eval' here, the
  // browser blocks that dev tooling outright — which doesn't just affect
  // HMR, it breaks client-side hydration entirely in `next dev`, so
  // nothing interactive (theme toggle, mobile nav, anything with an
  // onClick) works. Production builds don't use eval, so this stays out
  // of the policy that actually ships.
  const scriptSrc = isDev
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const csp = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob:;
    font-src 'self';
    connect-src 'self'${isDev ? " ws:" : ""};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on everything except Next's internal static assets and image
     * optimizer output — those don't render HTML and don't need a CSP.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
