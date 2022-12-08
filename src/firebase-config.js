// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvyAhSaX_Ur-kAqN1Ghei3ODsUwqVl4_k",
  authDomain: "enabler-528de.firebaseapp.com",
  projectId: "enabler-528de",
  storageBucket: "enabler-528de.appspot.com",
  messagingSenderId: "395670603828",
  appId: "1:395670603828:web:20a7e8d3d3ad672faee261",
  measurementId: "G-QEX21V43X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;