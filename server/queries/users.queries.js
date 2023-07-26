const usersQueries = {
    getUsers: `SELECT * FROM users`,
    registerUser: `INSERT INTO users (user_name, email, password, role, logged) VALUES ($1, $2, $3, 'user', false) RETURNING id_user, user_name, email, role, logged, registered_date`
}

module.exports = usersQueries;