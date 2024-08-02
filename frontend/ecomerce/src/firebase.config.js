// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default app;