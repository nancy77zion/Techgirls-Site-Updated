
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { updateUser } = require('../controllers/User.controller.js');

const routerManager2 = express.Router();

routerManager2.post('/update/:id', verifyToken, updateUser)
// router.delete('/delete/:id', verifyToken, deleteUser)
// router.get('/listings/:id', verifyToken, getUserListings)
// router.get('/:id', verifyToken, getUser)

module.exports = routerManager2;