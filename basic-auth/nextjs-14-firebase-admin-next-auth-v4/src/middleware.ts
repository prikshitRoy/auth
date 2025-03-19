import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

//NOTE: Add NEXTAUTH_SECRET= value to use next-auth/middleware

export default withAuth(function middleware(req) {
  const user = req.nextauth.token;
  if (req.nextauth.token) {
    //console.log("user:", user);
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/api/auth/signin"],
};
