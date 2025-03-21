import { getFirestore } from "firebase-admin/firestore";

const firestore = getFirestore();

export const getLinks = async () => {
  const linkSnapshort = await firestore.collection("users").get();
  const documents = linkSnapshort.docs.map((link) => ({
    name: link.data().name,
    email: link.data().email,
    emailVerified: link.data().emailVerified,
    image: link.data().image,
  }));

  return documents;
};
