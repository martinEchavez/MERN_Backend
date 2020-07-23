const user = {};

//Requerimos los datos de la Schema desde models/User
const userModel = require('../../models/Users')

//Se obtienen los datos por cada user
user.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

//Se crea un user con los campos obtenidos desde la Schema.
user.createUser = async (req, res) => {
    const { nombres, apellidos, email, numDocumento, area, salario, estado } = req.body.datos;
    const { fechaNacimiento } = req.body;
    const nuwUser = new userModel({
        nombres,
        apellidos,
        fechaNacimiento,
        email,
        numDocumento,
        area,
        salario,
        estado
    });
    await nuwUser.save();//Se guardan los datos
    res.json({ message: 'Usuario guardado' })//Se confirma que lo datos fueron guardado correctamente.
}
//Se obtiene un user único a treavés de su id
user.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.json(user)
}
//Se edita un único user a través de su ID
user.updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, fechaNacimiento, email, numDocumento, area, salario, estado } = req.body;
    await userModel.findOneAndUpdate({ id }, {
        nombres,
        apellidos,
        fechaNacimiento,
        email,
        numDocumento,
        area,
        salario,
        estado
    });
    res.json({ message: 'Usuario editado' })
}
//Se elimina el user.
user.deleteUser = async (req, res) => {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.json({ message: 'Usuario eliminado' })
}

module.exports = user;