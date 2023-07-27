const express = require('express');
// Rutas de productos
const usersApiControllers = require("../controllers/usersApiControllers");
const usersApiRouter = express.Router();

usersApiRouter.get('/', usersApiControllers.getUsers);
usersApiRouter.post("/register", usersApiControllers.createNewUser);
usersApiRouter.post("/login", usersApiControllers.logUser);
usersApiRouter.post("/logout", usersApiControllers.logOutUser);

module.exports = usersApiRouter;