
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRVHd60wHF7syHF5A-EfhpqJNH2nd2E5o",
  authDomain: "best-ecomerce.firebaseapp.com",
  projectId: "best-ecomerce",
  storageBucket: "best-ecomerce.appspot.com",
  messagingSenderId: "757226237124",
  appId: "1:757226237124:web:fa201fcb359729f273ad91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;