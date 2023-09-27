import firebase, { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tech-canvas.firebaseapp.com",
  projectId: "tech-canvas",
  storageBucket: "tech-canvas.appspot.com",
  messagingSenderId: "371167715075",
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// export const storage = "Hello"
export default app;