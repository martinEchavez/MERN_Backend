const { Schema, model } = require('mongoose');
//Se crea la Schema con los campos que va a tener el formulario.
const userSchema = new Schema({
    firstName: String,
    secondName: String, 
    lastName: String,
    email: String,
    telephone: Number,
    address: String,
    age: Number
}, {
    timestamps: true //Guarda la fecha de cración o modificación de la Schema.
});

module.exports = model('User', userSchema);