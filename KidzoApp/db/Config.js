// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm90yaGRE3PcePGFwn5STjmSFIkzRCSHM",
  authDomain: "kidzoapp-56775.firebaseapp.com",
  projectId: "kidzoapp-56775",
  storageBucket: "kidzoapp-56775.appspot.com",
  messagingSenderId: "685443084010",
  appId: "1:685443084010:web:6d4567d2c97e4b288eb193",
  measurementId: "G-DD0ND9P7D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app,auth};
