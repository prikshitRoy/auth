"use client";

import { AddUserData } from "@/server/firebase/db/write";

export default function UserDataButton() {
  const handleUserData = async () => {
    const result = await AddUserData();
  };

  return (
    <div>
      <button
        onClick={handleUserData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Add User Data to Firebase db
      </button>
    </div>
  );
}
