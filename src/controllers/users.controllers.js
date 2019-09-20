const usersCtrl = {};
//Requerimos los datos de la Schema desde models/User
const User = require('../models/User')
//Se obtienen los datos por cada usuario
usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}
//Se crea un usuario con los campos obtenidos desde la Schema.
usersCtrl.crateUser = async (req, res) => {
    const {firstName, secondName, lastNAme, email, telephone, address, age} = req.body;
    const newUser = new User({
        firstName, 
        secondName,
        lastNAme, 
        email,
        telephone,
        address,
        age 
    });
    await newUser.save();//Se guardan los datos
    res.json({message: 'User Saved'})//Se confirma que lo datos fueron guardado correctamente.
} 
//Se obtiene un usuario único a treavés de su ID
usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
} 
//Se edita un único usuario a través de su ID
usersCtrl.updateUser = async(req, res) => {
    const {firstName, secondName, lastNAme, email, telephone, address, age} = req.body;
    await User.findOneAndUpdate({_id: req.params.id}, {
        firstName, 
        secondName,
        lastNAme, 
        email,
        telephone,
        address,
        age 
    });
    res.json({message: 'Update user'})
}
//Se elimina el usuario.
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'Delete user'})
} 

module.exports = usersCtrl;