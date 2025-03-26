import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const NextAuthServerSession = async () => {
  const session = await getServerSession(authOptions);

  return session;
};
