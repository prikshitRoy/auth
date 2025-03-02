import { auth } from "@/lib/configs/firebase-admin";

export async function verifyIdToken(idToken: string) {
  try {
    const decodedToken = auth.verifyIdToken(idToken);
    return (await decodedToken).uid;
  } catch (error) {
    console.error("Error verifying ID token:", error);
    throw new Error("Invalid ID token");
  }
}
