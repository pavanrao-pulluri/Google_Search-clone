import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQrohYpiu829aZU9gk2K6Dz2nuM6BXqDw",
  authDomain: "clone-5ae00.firebaseapp.com",
  projectId: "clone-5ae00",
  storageBucket: "clone-5ae00.appspot.com",
  messagingSenderId: "912180001678",
  appId: "1:912180001678:web:592051ff333b42c0f942df",
  measurementId: "G-9HW77TQN73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((results) => {
        const name = results.user.displayName;
        const photo = results.user.photoURL;
        resolve({ name, photo });
      })
      .catch((error) => {
        console.log("Sign-in error:", error);
        reject(error);
      });
  });
};

export const signOutFromGoogle = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log("Sign-out error:", error);
        reject(error);
      });
  });
};
