const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);// Se asigna el purto 4000 por defecto o el servidor te asigna un puerto por defecto

// middlewares 'cors intercambio de datos entre varios servidores'
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/areas', require('./routes/areas'))

module.exports = app;