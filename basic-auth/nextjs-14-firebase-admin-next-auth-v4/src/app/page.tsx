import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getLinks } from "@/components/button/AddDataButton";
import AddDataButton from "@/components/button/data";

export default async function Home() {
  // Fetch the server session using NextAuth
  const session = await getServerSession(authOptions);

  const links = await getLinks();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hii from Nextjs 14
        <pre className="w-fit">{JSON.stringify(session, null, 2)}</pre>
        {links?.map((link) => (
          <div className="h-0">
            {link.email}
            {link.name}
          </div>
        ))}
        <AddDataButton />
      </main>
    </div>
  );
}
