const express = require('express');
// Rutas de productos
const itemsApiControllers = require("../controllers/itemsApiControllers");
const itemsApiRouter = express.Router();

itemsApiRouter.get('/sendas', itemsApiControllers.getSendas);
itemsApiRouter.get('/fuentes', itemsApiControllers.getFuentes);
itemsApiRouter.get('/centrosalud', itemsApiControllers.getCentrosSalud);
itemsApiRouter.get('/parquesjardines', itemsApiControllers.getParquesYJardines);
itemsApiRouter.get('/piscinas', itemsApiControllers.getPiscinas);
itemsApiRouter.get('/polideportivos', itemsApiControllers.getPolideportivos);
itemsApiRouter.get('/infciclista', itemsApiControllers.getInfCiclista);

module.exports = itemsApiRouter;