const express = require('express');
// Rutas de publicaciones
const publicationsApiControllers = require("../controllers/publicationsApiControllers");
const publicationsApiRouter = express.Router();

publicationsApiRouter.get('/', publicationsApiControllers.getPublications);
publicationsApiRouter.post("/", publicationsApiControllers.createPublication);
publicationsApiRouter.delete("/", publicationsApiControllers.deletePublication);

module.exports = publicationsApiRouter;