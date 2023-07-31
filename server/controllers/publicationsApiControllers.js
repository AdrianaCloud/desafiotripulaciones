const publicationsModels = require('../models/publications')
const usersModels = require('../models/users')
const uuid = require('uuid');

const getPublications = async (req, res) => {
    try {
        let data

        data = await publicationsModels.getPublications()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

const createPublication = async (req, res) => {
    const { user_id, title, text, item_id, alert } = req.body
    try {
        let data

        // Check if the email already exists
        const existingUser = await usersModels.getUserByEmail(user_id);
        console.log(existingUser)
        if (existingUser.length < 1) {
            return res.status(400).json({ message: "Email does not exist!" });
        }

        const publicationData = {
            publication_id: uuid.v4(),
            user_id,
            title,
            text,
            item_id,
            alert,
            date: /([0-9]+)-([0-9]+)-([0-9]+)/gm.exec(new Date().toJSON())[0]
        }

        data = await publicationsModels.createPublication(publicationData)

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

const deletePublication = async (req, res) => {
    const { publication_id } = req.body
    try {
        let data

        data = await publicationsModels.deletePublication(publication_id)

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = {
    getPublications,
    createPublication,
    deletePublication
}