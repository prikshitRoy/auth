import React from "react";
import { signInWithGoogle } from "@/lib/configs/firebase-config";

export const SignInButton: React.FC = () => {
  async function handleSignIn(): Promise<void> {
    try {
      const userCredentials = await signInWithGoogle();
      const accessToken = await userCredentials.user.getIdToken();
      console.log("Access Token", accessToken);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      className="p-1 bg-blue-400 rounded-md flex"
      onClick={handleSignIn}
    >
      Sign in with Google
    </button>
  );
};
