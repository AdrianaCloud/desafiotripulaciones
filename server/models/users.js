const pool = require('../utils/db_pgsql')
const usersQueries = require('../queries/users.queries')
const { hashPassword, comparePasswords, generateToken } = require("../utils/authUtils");

const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(usersQueries.getUsers)
        result = data.rows
        } catch (error) {
            throw error;
        } finally {
            client.release()
        }
    return result
}

module.exports = {
    getAllUsers
}