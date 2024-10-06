// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD47oc1k_KcCH-_QeWlYlVo-rm1vfE3Jpg",
  authDomain: "skales-fruits.firebaseapp.com",
  projectId: "skales-fruits",
  storageBucket: "skales-fruits.appspot.com",
  messagingSenderId: "462458772980",
  appId: "1:462458772980:web:da3131ee7906da0244eda1",
  measurementId: "G-Q56KTXT62T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user; // Returns the Google user object with user details
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    throw error;
  }
};
