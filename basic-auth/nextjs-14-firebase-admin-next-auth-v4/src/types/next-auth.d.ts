import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

type userRole = string | null;

// TODO: use share type for userRole in route.ts and next-auth.d.ts

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: userRole;
  }

  interface Session {
    user: DefaultSession["user"] & {
      role?: userRole;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role?: userRole;
  }
}
