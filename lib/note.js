const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {

    const newNote = body;

    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return newNote;
};

function findNote(id, notesArray) {

    for(let i=0; i<notesArray.length; i++){

        if(notesArray[i].id === id){

            return i;
        }
    }
};

function deleteNote(id, notesArray) {

    let idx = findNote(id, notesArray);

    notesArray.splice(idx, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return id;
};


module.exports = {createNewNote, deleteNote};