const express = require('express');
// Rutas de productos
const usersApiControllers = require("../controllers/usersApiControllers");
const usersApiRouter = express.Router();

usersApiRouter.get('/:email', usersApiControllers.getUsers);
usersApiRouter.get('/', usersApiControllers.getUsers);
usersApiRouter.post("/register", usersApiControllers.createNewUser);
usersApiRouter.post("/login", usersApiControllers.logUser);
usersApiRouter.post("/logout", usersApiControllers.logOutUser);
usersApiRouter.delete("/", usersApiControllers.deleteUser);
usersApiRouter.put("/", usersApiControllers.updateUser);

module.exports = usersApiRouter;