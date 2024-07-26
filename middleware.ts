import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublic = path === "/signup" || path === "/login";
  const token = request.cookies.get("loginToken")?.value || '';

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/category", "/products", "/cart", "/singup", "/login"],
};
