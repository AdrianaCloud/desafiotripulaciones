require('dotenv').config()

const usersQueries = {
    getUsers: `SELECT * FROM ${process.env.USERS_TABLE}`,
    getUserByEmail: `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = @email`,
    registerUser: `INSERT INTO ${process.env.USERS_TABLE} (id_user, user_name, email, password, role, logged, registered_date) VALUES (@id_user, @user_name, @email, @password, 'user', false, @registered_date)`,
    updateUserLogState: `UPDATE ${process.env.USERS_TABLE} SET logged = @state WHERE email = @email`,
    deleteUser: `DELETE ${process.env.USERS_TABLE} WHERE email = @email`
}

module.exports = usersQueries;