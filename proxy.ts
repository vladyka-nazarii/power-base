import { type NextRequest, NextResponse } from "next/server";
import {
  getPreferredLocale,
  isLocale,
  type Locale,
  localePreferenceCookie,
} from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];
  const requestHeaders = new Headers(request.headers);

  if (isLocale(firstSegment)) {
    requestHeaders.set("x-powerbase-locale", firstSegment);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const url = request.nextUrl.clone();
  const savedLocale = request.cookies.get(localePreferenceCookie)?.value ?? "";
  const locale: Locale = isLocale(savedLocale)
    ? savedLocale
    : getPreferredLocale(request.headers.get("accept-language"));

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
