// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvJ2IG4SR0iH5AZs-9pCHd8hGeA2WS8o",
  authDomain: "auth-moha-milon-22d5d.firebaseapp.com",
  projectId: "auth-moha-milon-22d5d",
  storageBucket: "auth-moha-milon-22d5d.appspot.com",
  messagingSenderId: "109616853525",
  appId: "1:109616853525:web:ac65420c6d074f6c4b141c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth