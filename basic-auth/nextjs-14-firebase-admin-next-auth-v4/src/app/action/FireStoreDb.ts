"use server";

import { getFirestore } from "firebase-admin/firestore";

const firestore = getFirestore();

export const AddData = async () => {
  //! Adding  user Data
  //!Create a new collection and a document using the following example code.
  const user = firestore.collection("users").doc("rahul");

  user.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
};
