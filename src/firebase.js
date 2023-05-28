import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDElerfCq0mlipcPfG53J4O8LX5UJulCx4",
  authDomain: "video-f9543.firebaseapp.com",
  projectId: "video-f9543",
  storageBucket: "video-f9543.appspot.com",
  messagingSenderId: "92705364611",
  appId: "1:92705364611:web:29405aa0546f71b51c19b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
