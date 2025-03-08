"use client";

import { useRouter } from "next/navigation";

export default async function SignIn() {
  const router = useRouter();

  const SignUp = async () => {
    router.push("/api/auth/signin");
  };
  return (
    <div className="text-white">
      <button onClick={SignUp}>SignIn</button>
    </div>
  );
}
