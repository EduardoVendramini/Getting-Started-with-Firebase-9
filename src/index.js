// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w0gPpwCgnDSdGM6F8Cu0PJOhSYBNXLA",
  authDomain: "test-f5e54.firebaseapp.com",
  projectId: "test-f5e54",
  storageBucket: "test-f5e54.appspot.com",
  messagingSenderId: "1031701932584",
  appId: "1:1031701932584:web:462bc37cd0bcf5f5a5e31d",
  measurementId: "G-MFGZ4NCL58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);