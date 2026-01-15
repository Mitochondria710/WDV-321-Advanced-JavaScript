function formatDate(dateString) {
  return new Date(dateString).toLocaleString("en-US");
}

document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("noteInput");
    const addNoteBtn = document.getElementById("addNoteBtn");
    const notesDiv = document.getElementById("notes");

    // Load notes from localStorage or empty array
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    function renderNotes() {
        notesDiv.innerHTML = "";
        notes.forEach((note, index) => {
            const noteEl = document.createElement("div");
            noteEl.classList.add("note");

            const noteText = document.createElement("span");
            noteText.textContent = note.noteText;

            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.classList.add("hidden");
            editInput.value = note.noteText;

            //edit button
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.addEventListener("click", () => {
              editInput.classList.remove("hidden");
              noteText.classList.add("hidden");
              saveBtn.classList.remove("hidden");
              editBtn.classList.add("hidden");
            });

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.classList.add("hidden");
            saveBtn.addEventListener("click", () => {
              notes[index] = {
                noteText: editInput.value
              };
              localStorage.setItem("notes", JSON.stringify(notes));
              renderNotes();
            });

            //delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                notes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(notes));
                renderNotes();
            });

            const timestampEl = document.createElement("span");

            timestampEl.textContent =
              `Created: ${formatDate(note.createdAt)}
                , Updated: ${formatDate(note.updatedAt)}`;

            noteEl.appendChild(noteText);
            noteEl.appendChild(editInput);
            noteEl.appendChild(saveBtn);
            noteEl.appendChild(editBtn);
            noteEl.appendChild(deleteBtn);
            noteEl.appendChild(timestampEl);
            notesDiv.appendChild(noteEl);
        });
    }

    addNoteBtn.addEventListener("click", () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            notes.push(
              {
                noteText: noteText,
                createdAt: Date.now(),
                updatedAt: Date.now()
              }
            );
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
            noteInput.value = "";
        }
    });

    // Render existing notes on load
    renderNotes();
});
