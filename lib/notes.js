const fs = require('fs');
const path = require('path');

const createNewNote = (note, notesArray) => {
    // adds new note to notes array
    notesArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// finds specific note by ID from notes array
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};



module.exports = { createNewNote, findById, editNote, removeNote };