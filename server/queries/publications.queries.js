require('dotenv').config()

const usersQueries = {
    getPublications: `SELECT * FROM ${process.env.PUBLICATIONS_TABLE}`,
    createPublication: `INSERT INTO ${process.env.PUBLICATIONS_TABLE} (publication_id, user_id, title, text, item_id, alert, date) VALUES (@publication_id, @user_id, @title, @text, @item_id, false, @date)`,
    deletePublication: `DELETE ${process.env.PUBLICATIONS_TABLE} WHERE publication_id = @publication_id`
}

module.exports = usersQueries;