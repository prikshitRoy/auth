import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getUserData } from "../server/firebase/db/read";
import WriteCityDataButton from "@/components/button/WriteCityData";
import UserDataButton from "@/components/button/UserData";

export default async function Home() {
  // Fetch the server session using NextAuth
  const session = await getServerSession(authOptions);

  const links = await getUserData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hii from Nextjs 14
        <pre className="w-fit">{JSON.stringify(session, null, 2)}</pre>
        {links?.map((data) => (
          <div className="h-0">
            {data.email}
            {data.name}
          </div>
        ))}
        <WriteCityDataButton />
        <UserDataButton />
      </main>
    </div>
  );
}
