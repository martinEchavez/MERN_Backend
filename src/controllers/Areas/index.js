const areasCtrl = {};

//Se obtiene los datos desde models/Note
const areaModel = require('../../models/Areas')

//Se obtieen todas las Áreas.
areasCtrl.getAreas = async (req, res) => {
    const areas = await areaModel.find();
    res.json(areas);
}

//Creación de áreas
areasCtrl.createArea = async (req, res) => {
    const { codigo, nombre, lider, estado } = req.body.datos;
    const newArea = new areaModel({
        codigo,
        nombre,
        lider,
        estado,
    });
    await newArea.save();//Se guarda el área
    res.json({ message: 'Area guardada' })
};

//Se obtien una área a través de su id
areasCtrl.getArea = async (req, res) => {
    const { id } = req.params;
    const area = await areaModel.findById(id);
    res.json(area)
}

//Se edita el área a través de su id
areasCtrl.updateArea = async (req, res) => {
    const { id } = req.params;
    const { codigo, nombre, lider, estado } = req.body;
    await areaModel.findOneAndUpdate({ id }, {
        codigo,
        nombre,
        lider,
        estado,
    });
    res.json({ message: 'Area editada' })
}
//Eliminar área a través de su id
areasCtrl.deleteArea = async (req, res) => {
    const { id } = req.params;
    await areaModel.findByIdAndDelete(id);
    res.json({ message: 'Area eliminada' })
}

module.exports = areasCtrl;