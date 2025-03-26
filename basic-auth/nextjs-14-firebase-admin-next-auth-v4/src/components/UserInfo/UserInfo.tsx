"use client";

import { getUserData } from "@/server/firebase/db/read";
import { useState } from "react";
import Button from "../button/button";
import { AddUserData, WriteCityData } from "@/server/firebase/db/write";

type UserData = {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string; // Optional field
};

export default function UserInfo() {
  const [userData, setUserData] = useState<UserData[] | null>([]);

  const handleRead = async () => {
    try {
      const result = await getUserData();
      setUserData(result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleUserData = async () => {
    const result = await AddUserData();
  };

  const handleCityData = async () => {
    const result = await WriteCityData();
  };

  return (
    <div>
      {userData ? (
        userData.map((data) => (
          <div key={data.email} className="mb-4">
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.emailVerified ? "Verified" : "Not Verified"}</div>
          </div>
        ))
      ) : (
        <div>No user data available.</div>
      )}

      <Button
        buttonName="Read User Data from Firebase db"
        onClick={handleRead}
      />
      <Button
        buttonName="Add User Data to Firebase db"
        onClick={handleUserData}
      />
      <Button
        buttonName="Write City Data in Firebase db"
        onClick={handleCityData}
      />
    </div>
  );
}
