function formatDate(dateString) {
  return new Date(dateString).toLocaleString("en-US");
}

const addNoteBtn = document.getElementById("addNoteBtn")
const notesDiv = document.getElementById("notes")
let notes = JSON.parse(localStorage.getItem("notes")) || [];

addNoteBtn.addEventListener("click", () => {
    const notesTextInput = document.getElementById("noteInput")
    const noteText = notesTextInput.value.trim();
    if(noteText) {
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
        notesTextInput.value = "";
        notesTextInput.focus();
    } else {
        alert("Add a note!");
    }
});


const renderNotes = () => {
    notesDiv.innerHTML = "";
    
    notes.forEach((note, index) => {
        const noteElement = document.createElement("p")
        noteElement.classList.add("notesContainer")
        notesDiv.classList.add("notesContainer")

        const noteText = document.createElement("span");
        noteText.textContent = note

        const editInput = document.createElement("input")
        editInput.type = "text"
        editInput.classList.add("hidden")
        editInput.value = note;

        //edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit"
        editButton.addEventListener("click", () => {
            editInput.classList.remove("hidden")
            noteText.classList.add("hidden")
            saveButton.classList.remove("hidden")
            editButton.classList.add("hidden")
        })

        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        saveButton.classList.add("hidden")
        saveButton.addEventListener("click", () => {
            console.log("saveButton Clicked")
            notes[index] = editInput.value
            localStorage.setItem("notes", JSON.stringify(notes))
            renderNotes()
        })
        
        // build delete button object, store in variable
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        })

        
            const timestampEl = document.createElement("span");

            timestampEl.textContent =
              `Created: ${formatDate(note.createdAt)}
                , Updated: ${formatDate(note.updatedAt)}`;


        noteElement.appendChild(noteText)
        noteElement.appendChild(editInput)
        noteElement.appendChild(saveButton)
        noteElement.appendChild(editButton)
        noteElement.appendChild(deleteButton)
        noteElement.appendChild(timestampEl)
        notesDiv.appendChild(noteElement)
    })
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
    
renderNotes();
