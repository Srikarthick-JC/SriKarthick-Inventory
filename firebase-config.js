// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCD70S5QDY67g5dqHnMmJsHLYbKBGl4Bow",
  authDomain: "notepad-edd2f.firebaseapp.com",
  projectId: "notepad-edd2f",
  storageBucket: "notepad-edd2f.firebasestorage.app",
  messagingSenderId: "314052971703",
  appId: "1:314052971703:web:5b3b95c31a00e6e6201132"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
