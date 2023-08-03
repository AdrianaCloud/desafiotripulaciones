const itemsModels = require('../models/items')
const uuid = require('uuid');

// GET (Gets item by id in DDBB) -> http://localhost:5000/api/items/id/:id
const getItemById = async (req, res) => {
    const { id } = req.params
    try {
        let data

        data = await itemsModels.getItemById(id)

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all sendas in DDBB) -> http://localhost:5000/api/items/sendas
const getSendas = async (req, res) => {
    try {
        let data

        data = await itemsModels.getSendas()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all centros de salud in DDBB) -> http://localhost:5000/api/items/centrosalud
const getCentrosSalud = async (req, res) => {
    try {
        let data

        data = await itemsModels.getCentrosSalud()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all parques y jardines in DDBB) -> http://localhost:5000/api/items/parquesjardines
const getParquesYJardines = async (req, res) => {
    try {
        let data

        data = await itemsModels.getParquesYJardines()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all piscinas in DDBB) -> http://localhost:5000/api/items/piscinas
const getPiscinas = async (req, res) => {
    try {
        let data

        data = await itemsModels.getPiscinas()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all fuentes in DDBB) -> http://localhost:5000/api/items/fuentes
const getFuentes = async (req, res) => {
    try {
        let data

        data = await itemsModels.getFuentes()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all polideportivos in DDBB) -> http://localhost:5000/api/items/polideportivos
const getPolideportivos = async (req, res) => {
    try {
        let data

        data = await itemsModels.getPolideportivos()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// GET (Gets all infraestructuras ciclistas in DDBB) -> http://localhost:5000/api/items/infciclista
const getInfCiclista = async (req, res) => {
    try {
        let data

        data = await itemsModels.getInfCiclista()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = {
    getSendas,
    getFuentes,
    getCentrosSalud,
    getParquesYJardines,
    getPiscinas,
    getPolideportivos,
    getInfCiclista,
    getItemById
}