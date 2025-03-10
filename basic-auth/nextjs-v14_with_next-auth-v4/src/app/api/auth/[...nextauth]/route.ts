import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";

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
  adapter: PrismaAdapter(prisma),
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

    // https://next-auth.js.org/providers/credentials
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
