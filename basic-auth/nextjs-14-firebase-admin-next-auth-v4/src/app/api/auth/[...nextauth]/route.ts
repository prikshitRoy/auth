import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Account, Session, User, Profile } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/server/firebase/firestore";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getCredentials } from "@/server/next-auth/OAuthProvider";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: Add Email Provider, CredentialsProvider
// TODO: Firebase - SMS Multi-factor Authentication
// TODO: users to sign in with a mobile phone number, using Firebase SDK phone verification and user authentication tools.
// TODO: Enable anonymous guest accounts in your application, which lets you enforce user-specific Security and Firebase Rules without requiring credentials from your users.
// TODO: And other available options

export const authOptions = {
  adapter: FirestoreAdapter(firestore),
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("Provide from Github OAuth:", profile);

        let userRole = "Github User";
        if (profile?.email === "parikshitroy00@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          // NOTE: Convert profile.id to a string to avoid type mismatch errors
          id: profile.id.toString(),
          role: userRole,
        };
      },
      clientId: getCredentials("GITHUB").clientId,
      clientSecret: getCredentials("GITHUB").clientSecret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Provide from Google OAuth:", profile);

        let userRole = "Github User";
        if (profile?.email === "parikshitroy01@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          // NOTE: The returned object is missing the 'id' property.
          // Explicitly include an 'id' field using 'profile.sub',
          // which typically represents the unique user ID in Google OAuth.
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: getCredentials("GOOGLE").clientId,
      clientSecret: getCredentials("GOOGLE").clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
