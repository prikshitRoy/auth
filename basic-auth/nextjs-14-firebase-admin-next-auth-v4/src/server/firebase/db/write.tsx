import { db } from "../firestore";

export const WriteData = async () => {
  const data = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  };

  const res = await db.collection("cities").doc("LA").set(data);
};

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
