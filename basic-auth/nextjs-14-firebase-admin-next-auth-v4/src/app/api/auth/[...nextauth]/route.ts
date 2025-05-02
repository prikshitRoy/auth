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
      clientId: getCredentials("GITHUB").clientId,
      clientSecret: getCredentials("GITHUB").clientSecret,
    }),
    GoogleProvider({
      clientId: getCredentials("GOOGLE").clientId,
      clientSecret: getCredentials("GOOGLE").clientSecret,
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
