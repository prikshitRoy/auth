import { auth } from "@clerk/nextjs/server";
import { SignOutButton, SignInButton } from "@clerk/nextjs";

export default async function NavBar() {
  const { userId } = await auth();
  return (
    <nav className="fixed top-0 w-full bg-white border-b text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {userId && (
            <>
              <div className="p-2 border border-blue-800 rounded-full bg-blue-200">
                User
              </div>
            </>
          )}

          <div className="flex gap-1 ml-0">
            <div className="p-2 border border-blue-800 rounded-full bg-blue-200">
              {userId ? <SignOutButton /> : <SignInButton />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
