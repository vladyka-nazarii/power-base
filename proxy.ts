import { NextResponse, type NextRequest } from "next/server";
import {
  getPreferredLocale,
  isLocale,
  localePreferenceCookie,
} from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const savedLocale = request.cookies.get(localePreferenceCookie)?.value;
  const locale = isLocale(savedLocale ?? "")
    ? savedLocale
    : getPreferredLocale(request.headers.get("accept-language"));

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|en(?:/|$)|uk(?:/|$)|.*\\..*).*)",
  ],
};
