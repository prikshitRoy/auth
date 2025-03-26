import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Account, Session, User } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/server/firebase/firestore";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getCredentials } from "@/server/next-auth/OAuthProvider";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: Add Email Provider

export const authOptions = {
  adapter: FirestoreAdapter(firestore),
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GithubProvider({
      clientId: getCredentials("GITHUB").clientId,
      clientSecret: getCredentials("GITHUB").clientSecret,
    }),
    GoogleProvider({
      clientId: getCredentials("GOOGLE").clientId,
      clientSecret: getCredentials("GOOGLE").clientSecret,
    }),
  ],
  // Modify callbacks section
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        // Store user data in token
        token.user = {
          ...token.user,
          role: user.role, // Copy the role from user to token.user
        };
      }
      return token; // JWT interface we declared in next-auth.d.ts
    },
    async session({ session, token }: { token: JWT; session: Session }) {
      if (session.user && token.user) {
        // Get role from token.user, not directly from token
        session.user.role = token.user.role ?? null;
      }
      return session; // Session interface we declared in next-auth.d.ts
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
