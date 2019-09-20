const notesCtrl = {};
//Se obtiene los datos desde models/Note
const Note = require('../models/Note')
//Se obtieen todas las notas.
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}
//Creación de nota
notesCtrl.crateNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title, 
        content, 
        author,
        date, 
    });
    await newNote.save();//Se guarda la nota 
    res.json({message: 'Note Saved'})//Nota creada.
};
//Se obtien una nota a través de su ID
notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
} 
//Se edita la nota a través de su ID
notesCtrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title, 
        content, 
        author
    });
    res.json({message: 'Update note'})
} 
//Eliminar nota a través de su ID
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Delete note'})
} 

module.exports = notesCtrl;