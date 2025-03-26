import { NextAuthServerSession } from "@/server/next-auth/NextAuthServerSession";

export default async function ServerSession() {
  // NOTE:
  // Simple example how to use next-auth Server Session

  const session = await NextAuthServerSession();

  return (
    <>
      <h1>Session data:</h1>
      <pre className="w-fit">{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
