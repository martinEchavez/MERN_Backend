const app = require('./app');
require('./database');

// Funcion que inicializa el servidor
async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();