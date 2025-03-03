import { SignInButton } from "@/components/auth/sign-in-button";
import SignInWithEmailAndPassword from "@/components/auth/SignIn-With-Email-And-Password";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SignInWithEmailAndPassword />
      </main>
    </div>
  );
}
