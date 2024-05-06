const express = require("express");
const { login } = require("../controllers/UserAuth.controller");
const { register } = require("../controllers/UserAuth.controller");
const routerManager = express.Router();

routerManager.post('/login', login)
routerManager.post('/register', register)

module.exports = routerManager