import React from "react";
import { signInWithGoogle } from "../config/firebaseConfig";

const AuthButton: React.FC = () => {
  const handleGoogleSignup = async () => {
    try {
      const googleUser = await signInWithGoogle();
      const { displayName: name, email, uid: googleId } = googleUser;

      const response = await fetch(
        
        "/api/auth/google-signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, googleId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("Google signup successful:", data);
      } else {
        console.error("Google signup failed:", data);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <button className="google-auth-btn" onClick={handleGoogleSignup}>
      Sign in with Google
    </button>
  );
};

export default AuthButton;
