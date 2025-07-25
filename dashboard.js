import { auth, db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const notesContainer = document.getElementById("notesContainer");
const userDisplay = document.getElementById("userEmail");
let currentUser = null;

// Auth state check
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    userDisplay.textContent = user.email;
    await loadNotes();
  } else {
    window.location.href = "index.html";
  }
});

// Load notes from Firestore
async function loadNotes() {
  const notesRef = collection(db, "users", currentUser.uid, "notes");
  const snapshot = await getDocs(notesRef);

  if (snapshot.empty) {
    notesContainer.innerHTML = "<p>No notes yet.</p>";
    return;
  }

  let notesHTML = "";
  snapshot.forEach((doc) => {
    const note = doc.data();
    notesHTML += `
      <div class="note-card">
        <h3>${note.title}</h3>
        <p>${note.content.substring(0, 120)}...</p>
      </div>
    `;
  });

  notesContainer.innerHTML = notesHTML;
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
