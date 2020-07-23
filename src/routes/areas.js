const { Router } = require('express');
const router = Router();

const {getAreas, createArea, getArea, updateArea, deleteArea} = require('../controllers/Areas');

router.route('/')
.get(getAreas)
.post(createArea)

router.route('/:id')
.get(getArea)
.put(updateArea)
.delete(deleteArea)

module.exports = router;