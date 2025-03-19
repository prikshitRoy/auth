import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/app/lib/firestore";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

type Provider = "GOOGLE" | "GITHUB";

// TODO:
// Add Email Provider
function getCredentials(provider: Provider) {
  const clientId = process.env[`${provider}_CLIENT_ID`];
  const clientSecret = process.env[`${provider}_CLIENT_SECRET`];

  if (!clientId || clientId.length === 0) {
    throw new Error(`No clientID for ${provider} provider set`);
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error(`No clientSecret for ${provider} provider set`);
  }

  return { clientId, clientSecret };
}

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
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
