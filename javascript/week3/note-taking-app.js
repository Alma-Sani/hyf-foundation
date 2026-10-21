// save a note
const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };

  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// get a note

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  return "Note not found";
}

console.log(getNote(1));
console.log(getNote(2));

// log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content,
    );
  }
}

logOutNotesFormatted();

// unique feature

function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return;
    }
  }
}

deleteNote(1);

console.log(notes);
