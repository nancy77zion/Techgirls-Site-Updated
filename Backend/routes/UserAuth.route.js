const express = require("express");
const { login } = require("../controllers/UserAuth.controller");
const { register, google } = require("../controllers/UserAuth.controller");
const routerManager = express.Router();

routerManager.post('/login', login)
routerManager.post('/register', register)
routerManager.post('/google', google)

module.exports = routerManager