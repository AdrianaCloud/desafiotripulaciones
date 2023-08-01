const express = require('express');
// Rutas de publicaciones
const perfilApiControllers = require("../controllers/perfilApiControllers");
const perfilApiRouter = express.Router();

perfilApiRouter.get('/', perfilApiControllers.getPerfiles);
perfilApiRouter.get('/:user_id', perfilApiControllers.getPerfiles);
perfilApiRouter.post("/", perfilApiControllers.createPerfil);
perfilApiRouter.put("/", perfilApiControllers.updatePerfil);

module.exports = perfilApiRouter;