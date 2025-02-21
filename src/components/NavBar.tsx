import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function NavBar() {
  const { userId } = await auth();
  return (
    <nav className="fixed top-0 w-full bg-white border-b text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {userId && (
            <>
              <div className="p-2 border border-blue-800 rounded-full bg-blue-200">
                U
              </div>
            </>
          )}

          {!userId && (
            <div className="flex gap-1">
              <div className="p-2 border border-blue-800 rounded-full bg-blue-200">
                <SignInButton />
              </div>
              <div className="p-2 border border-blue-800 rounded-full bg-blue-200">
                <SignUpButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
