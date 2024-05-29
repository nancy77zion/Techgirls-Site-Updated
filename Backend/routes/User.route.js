
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { updateUser, getUserById,  } = require('../controllers/User.controller.js');

const routerManager2 = express.Router();

routerManager2.put('/:id', verifyToken, updateUser)
// routerManager.delete('/:id', verifyToken, deleteUser)
// routerManager.get('/', verifyToken, geAlltUser)
routerManager2.get('/:id', verifyToken, getUserById)

module.exports = routerManager2;