// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs2wTpy6sofmfFh0Kypk2a8JM_WZ3f78w",
  authDomain: "angelconnect-154b3.firebaseapp.com",
  projectId: "angelconnect-154b3",
  storageBucket: "angelconnect-154b3.appspot.com",
  messagingSenderId: "1033510091748",
  appId: "1:1033510091748:web:d0f2a4b798111daa7225f1",
  measurementId: "G-QS3EEXCEG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
