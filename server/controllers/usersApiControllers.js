const usersModels = require('../models/users')
const uuid = require('uuid');
const { hashPassword } = require('../utils/authUtils');

// POST (Create a new user in DDBB) -> http://localhost:5000/api/users

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
        console.log(existingUser);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: "Email already exists" });
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
            error
        })
    }
}

// GET (Gets all users in DDBB) -> http://localhost:5000/api/users
const getUsers = async (req, res) => {
    try {
        const data = await usersModels.getAllUsers()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

// const  login = async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const client = await pool.connect()

//     } catch (error) {
        
//     }
//     }
    

module.exports = {
    createNewUser,
    getUsers,
    // login
}