
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { updateUser, getUserById,  } = require('../controllers/User.controller.js');

const routerManager2 = express.Router();

routerManager2.post('/update/:id', verifyToken, updateUser)
// router.delete('/delete/:id', verifyToken, deleteUser)
// router.get('/all/:id', verifyToken, geAlltUser)
routerManager2.get('you/:id', verifyToken, getUserById)

module.exports = routerManager2;