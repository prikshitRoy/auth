"use server";

import { db } from "@/server/firebase/firestore";

//! Reading Data from Fireatore Database
export const getUserData = async () => {
  const linkSnapshort = await db.collection("users").get();
  const documents = linkSnapshort.docs.map((link) => ({
    name: link.data().name,
    email: link.data().email,
    emailVerified: link.data().emailVerified,
    image: link.data().image,
  }));

  return documents;
};
