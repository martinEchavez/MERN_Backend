const { Schema, model } = require('mongoose');

//Se crea la Schema con los campos que va a tener el formulario.
const noteSchema = new Schema({
    title: String,
    content: {
        type: String, 
        require: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now 
    }
}, {
    timestamps: true
});

module.exports = model('Note', noteSchema);