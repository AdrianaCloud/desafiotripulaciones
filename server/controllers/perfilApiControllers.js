const perfilModels = require('../models/perfil')
const usersModels = require('../models/users')
const uuid = require('uuid');

const getPerfiles = async (req, res) => {
    const { user_id } = req.params
    try {

        let data

        if (user_id) {
            data = await perfilModels.getPerfilByUserId(user_id)
        } else {
            data = await perfilModels.getPerfiles()
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error })
    }
}

const updatePerfil = async (req, res) => {
    const { user_id, preferencias_deportivas, tipo_de_dieta, ciudad, objetivo_entrenamiento, sexo, peso, condicion, edad, altura } = req.body
    try {
        let data

        const perfilData = {
            user_id,
            preferencias_deportivas,
            tipo_de_dieta,
            ciudad,
            objetivo_entrenamiento,
            sexo,
            peso,
            condicion,
            edad,
            altura
        }

        // Check if the email already exists
        const existingUser = await usersModels.getUserByEmail(user_id);
        console.log(existingUser)
        if (existingUser.length < 1) {
            return res.status(400).json({ message: "Email does not exist!" });
        }

        data = await perfilModels.updatePerfil(perfilData)

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error })
    }
}

const createPerfil = async (req, res) => {
    const { user_id, preferencias_deportivas, tipo_de_dieta, ciudad, objetivo_entrenamiento, sexo, peso, condicion, edad, altura } = req.body
    try {
        let data

        // Check if the email already exists
        const existingUser = await usersModels.getUserByEmail(user_id);
        console.log(existingUser)
        if (existingUser.length < 1) {
            return res.status(400).json({ message: "Email does not exist!" });
        }

        const perfilData = {
            perfil_id: uuid.v4(),
            user_id,
            preferencias_deportivas,
            tipo_de_dieta,
            ciudad,
            objetivo_entrenamiento,
            sexo,
            peso,
            condicion,
            edad,
            altura
        }

        data = await perfilModels.createPerfil(perfilData)

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = {
    createPerfil,
    getPerfiles,
    updatePerfil
}