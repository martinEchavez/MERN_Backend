const { Schema, model } = require('mongoose');

//Se crea la Schema con los campos que va a tener el formulario.
const areaSchema = new Schema({
    codigo: {type: Number, require: true},
    nombre: {type: String, require: true},
    lider: {type: Number, require: true},
    estado: {type: Boolean, require: true},
}, {
    timestamps: true
});

module.exports = model('Area', areaSchema);