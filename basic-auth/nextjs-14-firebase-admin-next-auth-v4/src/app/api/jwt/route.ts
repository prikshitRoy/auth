import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (token) {
    // console.log("JSON Web Token", JSON.stringify(token, null, 2));
    return NextResponse.json(token);
  } else {
    return Response.json(null);
  }
}
