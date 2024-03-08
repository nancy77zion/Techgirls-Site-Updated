const express = require("express");
const { login } = require("../controllers/User.controller");
const { register } = require("../controllers/User.controller");
const routerManager = express.Router();

routerManager.post('/login', login)
routerManager.post('/register', register)

module.exports = routerManager