import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOut from "@/app/(auth)/(SignOut)/page";
import SignIn from "@/app/(auth)/(SignIn)/page";

const Header: React.FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full bg-gray-800 flex justify-end items-center p-3">
      {session ? <SignOut /> : <SignIn />}
    </div>
  );
};
export default Header;
