const router = require('express').Router();
const { createNewNote } = require('../../lib/note')
const { notes } = require('../../db/db.json');

// get /api/notes should read the db.json file
router.get('/notes', (req, res) => {
    res.json(notes);
});

// post /api/notes should receive a new note to save on the request body
// add to db.json and return the new note to the client
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;