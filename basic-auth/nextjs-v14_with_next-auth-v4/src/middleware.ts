import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Check for the session token in cookies
  const sessionToken =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  // If we're on the login page and have a session token, redirect to home
  if (request.nextUrl.pathname === "/login" && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/login",
};
