import ServerSession from "@/components/UserSession/UserSession";

import UserInfo from "@/components/UserInfo/UserInfo";

const Learn = [
  "Learn how to add Custom data like role to User.",
  "Learn how to pass Custom data to user Session.",
];

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

        <ul>
          {Learn.map((item, index) => (
            <li key={index}>
              <h2 className="text-1xl text-green-400 font-bold">- {item}</h2>
            </li>
          ))}
        </ul>
      </div>
      <ServerSession />
      <UserInfo />
    </div>
  );
}
