const { Router } = require('express');
const router = Router();

const {getUsers, crateUser, getUser, updateUser,deleteUser} = require('../controllers/users.controllers');

router.route('/')
.get(getUsers)
.post(crateUser)

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)   

module.exports = router;