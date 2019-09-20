const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);//Conexión con la base de datos MongoDB.
mongoose.connect('mongodb+srv://mechavez:3116532353@cluster0-nrmab.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
