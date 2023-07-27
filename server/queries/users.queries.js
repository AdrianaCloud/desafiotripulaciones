require('dotenv').config()

const usersQueries = {
    getUsers: `SELECT * FROM ${process.env.USERS_TABLE}`,
    getUserByEmail: `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = @email`,
    registerUser: `INSERT INTO ${process.env.USERS_TABLE} (id_user, user_name, email, password, role, logged, registered_date) VALUES (@id_user, @user_name, @email, @password, 'user', false, @registered_date)`
}

module.exports = usersQueries;