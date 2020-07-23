const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);//Conexión con la base de datos MongoDB.
mongoose.connect('mongodb://localhost/prueba', {
  useCreateIndex: true,
  useNewUrlParser: true,
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
