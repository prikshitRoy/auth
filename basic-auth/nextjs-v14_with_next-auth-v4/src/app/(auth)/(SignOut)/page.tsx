"use client";

import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();

  const logOut = async () => {
    router.push("/api/auth/signout");
  };

  return (
    <div className="text-white">
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
}
