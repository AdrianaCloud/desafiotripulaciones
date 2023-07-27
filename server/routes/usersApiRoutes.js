const express = require('express');
// Rutas de productos
const usersApiControllers = require("../controllers/usersApiControllers");
const usersApiRouter = express.Router();

usersApiRouter.get('/', usersApiControllers.getUsers);
usersApiRouter.post("/register", usersApiControllers.createNewUser);
// usersApiRouter.post("/login", usersApiControllers.login);

module.exports = usersApiRouter;