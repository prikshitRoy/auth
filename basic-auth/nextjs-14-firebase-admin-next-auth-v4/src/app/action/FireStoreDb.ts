"use server";

import { db } from "../lib/firestore";

export const AddData = async () => {
  //! Adding  user Data
  //!Create a new collection and a document using the following example code.
  const user = db.collection("users").doc("rahul");

  user.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
};
