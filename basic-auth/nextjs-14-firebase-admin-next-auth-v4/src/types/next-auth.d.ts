import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

// TODO: What is import type { Account, Session, User, Profile } from "next-auth";

type userRole = string | null;

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
