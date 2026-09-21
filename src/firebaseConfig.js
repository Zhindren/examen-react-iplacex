import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSAdVy3qEOSm5N7r5Ce_gIET6wYwJXlIg",
    authDomain: "exameniplacex.firebaseapp.com",
    projectId: "exameniplacex",
    storageBucket: "exameniplacex.firebasestorage.app",
    messagingSenderId: "1043676500468",
    appId: "1:1043676500468:web:79c00c41b53feb5725e9a1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
