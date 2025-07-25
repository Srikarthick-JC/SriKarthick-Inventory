import { auth, db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
  } else {
    window.location.href = "index.html";
  }
});

window.saveNote = async function () {
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  if (!title || !content) {
    alert("Please fill in both fields.");
    return;
  }

  try {
    await addDoc(collection(db, "users", currentUser.uid, "notes"), {
      title,
      content,
      createdAt: new Date()
    });
    alert("✅ Note saved successfully!");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error saving note:", error);
    alert("❌ Failed to save note. Check console.");
  }
};
