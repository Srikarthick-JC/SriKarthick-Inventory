import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Register new user
function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("✅ Registered successfully"))
    .catch(err => alert("❌ " + err.message));
}

// Login user
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
  window.location.href = "dashboard.html";
})

}

// Logout
function logout() {
  signOut(auth).then(() => {
    alert("🚪 Logged out");
    document.getElementById("notepadSection").classList.add("hidden");
  });
}

// Placeholder functions
function saveNote() {
  const note = document.getElementById("noteArea").value;
  alert("💾 Note saved (DB integration coming soon)");
}

function loadNote() {
  alert("📖 Load feature not implemented yet.");
}

// Expose globally for inline buttons
window.register = register;
window.login = login;
window.logout = logout;
window.saveNote = saveNote;
window.loadNote = loadNote;
