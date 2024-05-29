
const express = require('express');
const { allCourse, oneCourse, updateCourse, deleteCourse } = require('../controllers/Course.controllers');
//const verifyToken = require('../middlewares/verifyToken');


const routerManager = express.Router();

routerManager.get('/:id', oneCourse)
routerManager.get('/', allCourse)
routerManager.put('/:id', updateCourse)
routerManager.delete('/:id', deleteCourse)


module.exports = routerManager;