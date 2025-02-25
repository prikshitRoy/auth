"use client";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = async ({ username }) => {
  return <div className="w-full h-11 bg-gray-800">{username}</div>;
};
export default Header;
