import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const Header: React.FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full bg-gray-800 flex justify-end items-center p-3">
      {session ? (
        <Link href="/api/auth/signout">SignOut</Link>
      ) : (
        <div>
          <Link href="/api/auth/signin">SignIn</Link>
          {/*           <Link href="/api/auth/signin">signup</Link> */}
        </div>
      )}
    </div>
  );
};
export default Header;
