const { Router } = require('express');
const router = Router();

const {getNotes, crateNote, getNote, updateNote,deleteNote} = require('../controllers/notes.controllers');

router.route('/')
.get(getNotes)
.post(crateNote)

router.route('/:id')
.get(getNote)
.put(updateNote)
.delete(deleteNote)   

module.exports = router;