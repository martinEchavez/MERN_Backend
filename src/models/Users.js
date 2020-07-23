const { Schema, model } = require('mongoose');

//Se crea la Schema con los campos que va a tener el formulario.
const usuarioSchema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    fechaNacimiento: {type: Date, required: true},
    email: {type: String, required: true},
    numDocumento: {type: Number, required: true},
    area: {type: Number, required: true},
    salario: {type: Number, required: true},
    estado: {type: Boolean, required: true},
}, {
    timestamps: true //Guarda la fecha de cración o modificación de la Schema.
});

module.exports = model('Usuario', usuarioSchema);