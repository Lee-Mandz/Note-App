const addBtn = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");

addBtn.addEventListener("click", () => {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;

  if (title || content) {
    const note = document.createElement("div");
    note.className = "note";

    note.innerHTML = `
      <h3 contenteditable="false">${title}</h3>
      <p contenteditable="false">${content}</p>
      <button class="edit">Edit</button>
      <button class="archive">Archive</button>
      <button class="delete">Delete</button>
    `;

    // Add event listeners
    note
      .querySelector(".edit")
      .addEventListener("click", () => toggleEdit(note));
    note
      .querySelector(".archive")
      .addEventListener("click", () => archiveNote(note));
    note
      .querySelector(".delete")
      .addEventListener("click", () => note.remove());

    notesList.appendChild(note);

    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
  }
});

function toggleEdit(note) {
  const h3 = note.querySelector("h3");
  const p = note.querySelector("p");
  const isEditable = h3.isContentEditable;

  h3.contentEditable = !isEditable;
  p.contentEditable = !isEditable;

  note.querySelector(".edit").textContent = isEditable ? "Edit" : "Save";
}

function archiveNote(note) {
  note.style.opacity = "0.5";
  note.querySelector(".archive").disabled = true;
}
