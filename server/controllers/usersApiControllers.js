const usersModels = require('../models/users')
const uuid = require('uuid');
const { hashPassword, comparePasswords, generateToken } = require('../utils/authUtils');

// POST (Log an user in DDBB) -> http://localhost:5000/api/users/login
// {
//     "email": "santi@lmao.com",
//     "password": "holahola1"
// }

const logUser = async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await usersModels.getUserByEmail(email)
        
        if(user.length < 1) {
            return res.status(400).json({
                msg: "No existe un usuario con ese email!"
            })
        }

        const passwordMatch = await comparePasswords(password, user[0].password)

        if(passwordMatch == false) {
            return res.status(400).json({
                msg: "Contraseña incorrecta"
            })
        }

        await usersModels.logUser(email)

        const token = generateToken({ user_name: user[0].user_name, email: email, role: user[0].role });
        res.status(200)
            .set('Authorization', `Bearer ${token}`)
            .cookie('access_token', token)
            .json({
                msg: "Usuario autenticado!",
                token: token
            })
            .send()

    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

// POST (Logout an user in DDBB) -> http://localhost:5000/api/users/logout
// {
//     "email": "santi@lmao.com"
// }

const logOutUser = async (req, res) => {
    const { email } = req.body

    try {

        const user = await usersModels.getUserByEmail(email)
        
        if(user.length < 1) {
            return res.status(400).json({
                msg: "No existe un usuario con ese email!"
            })
        }

        await usersModels.logOutUser(email)

        res.status(200)
            .set('Authorization', "")
            .cookie('access_token', "")
            .json({
                msg: "Sesión cerrada!"
            })
            .end()

    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

// PUT (Create a new user in DDBB) -> http://localhost:5000/api/users

// {
//     "user_name": "NuevoSanti",
//     "email": "santi@lmao.com",
//     "new_email": "nuevosanti@lmao.com"
// }

const updateUser = async (req, res) => {
    const { email, new_email, user_name } = req.body
    try {
        const existingNewEmail = await usersModels.getUserByEmail(new_email)
        
        if(existingNewEmail.length > 0) {
            return res.status(400).json({
                msg: "Ya existe un usuario con ese email!"
            })
        }

        const existingEmail = await usersModels.getUserByEmail(email)
        
        if(existingEmail.length < 1) {
            return res.status(400).json({
                msg: "No existe ningún usuario con este email!"
            })
        }

        const userData = {
            email,
            new_email,
            user_name
        }

        const data = await usersModels.updateUser(userData)

        res.status(200).json({
            msg: `Usuario ${email} actualizado a ${new_email} con nombre ${user_name}!`
        })

    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

// POST (Create a new user in DDBB) -> http://localhost:5000/api/users/register

// {
//     "user_name": "santi",
//     "email": "santi@lmao.com",
//     "password": "holahola1"
// }

const createNewUser = async (req, res)=> {
    const { user_name, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await usersModels.getUserByEmail(email);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userData = {
            id_user: uuid.v4(),
            user_name: user_name,
            email: email,
            password: await hashPassword(password),
            registered_date: /([0-9]+)-([0-9]+)-([0-9]+)/gm.exec(new Date().toJSON())[0]
        }

        const data = await usersModels.registerUser(userData)
        
        res.status(201).json({
            msg: "User created successfully",
            user: userData
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

// POST (Delete a user in DDBB) -> http://localhost:5000/api/users

// {
//     "email": "santi@lmao.com"
// }


const deleteUser = async (req, res) => {
    const { email } = req.body
    try {

        // Check if the email already exists
        const existingUser = await usersModels.getUserByEmail(email);

        if (existingUser.length < 1) {
            return res.status(400).json({ message: "Email does not exist!" });
        }

        const deletedUser = await usersModels.deleteUser(email)

        res.status(200).json({
            msg: "Usuario borrado correctamente",
            deleted_user: existingUser
        })

    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

// GET (Gets all users in DDBB) -> http://localhost:5000/api/users
// GET (Gets user with specific email in DDBB) -> http://localhost:5000/api/users/santi@lmao.com
const getUsers = async (req, res) => {
    try {
        let data

        if(req.params.email) {

            // Check if the email already exists
            const existingUser = await usersModels.getUserByEmail(req.params.email);

            if (existingUser.length < 1) {
                return res.status(400).json({ message: "Email does not exist!" });
            }

            data = await usersModels.getUserByEmail(req.params.email)
        } else {
            data = await usersModels.getAllUsers()
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = {
    createNewUser,
    getUsers,
    logUser,
    logOutUser,
    deleteUser,
    updateUser
}