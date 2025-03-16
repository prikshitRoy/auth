// import { NextResponse, type NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   // Check for the session token in cookies
//   const sessionToken =
//     request.cookies.get("next-auth.session-token")?.value ||
//     request.cookies.get("__Secure-next-auth.session-token")?.value;

//   // If we're on the login page and have a session token, redirect to home
//   if (request.nextUrl.pathname === "/login" && sessionToken) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Continue with the request for all other cases
//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/login",
// };

//! ------------ OR ---------------------------

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

//NOTE: Add NEXTAUTH_SECRET= value to use next-auth/middleware

export default withAuth(function middleware(req) {
  const user = req.nextauth.token;
  if (req.nextauth.token) {
    console.log("user:", user);
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/login"],
};
