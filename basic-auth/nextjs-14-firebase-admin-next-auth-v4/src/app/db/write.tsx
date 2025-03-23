import { db } from "../lib/firestore";

export const WriteData = async () => {
  const data = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  };

  const res = await db.collection("cities").doc("LA").set(data);
};
