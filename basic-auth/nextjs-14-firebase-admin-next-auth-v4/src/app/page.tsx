import ServerSession from "@/components/UserSession/UserSession";

import UserInfo from "@/components/UserInfo/UserInfo";

export default async function Home() {
  return (
    <div className="flex flex-col px-2 w-fit h-full">
      <div>
        <h1 className="text-2xl underline font-bold">
          Next-Auth-v4 with Firebase Admin SDK
        </h1>
        <div className="bg-gray-600">
          TechStack: Nextjs-v14.2.25 + Next-Auth-v4 + Firebase
        </div>
      </div>
      <ServerSession />
      <UserInfo />
    </div>
  );
}
