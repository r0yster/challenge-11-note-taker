const router = require('express').Router();

const { createNewNote, deleteNote } = require('../../lib/note');
const { notes } = require('../../db/db.json');

// get /api/notes should read the db.json file
router.get('/notes', (req, res) => {

    res.json(notes);
});

// post /api/notes should receive a new note to save on the request body
// add to db.json and return the new note to the client
router.post('/notes', (req, res) => {

    req.body.id = notes.length.toString();

    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

// delete /api/notes/:id should receive a query parameter containgin the id
// of a note to delete
router.delete('/notes/:id', (req, res) => {

    let noteId = req.param.id;
    res.json(deleteNote(noteId, notes));    
});

module.exports = router;