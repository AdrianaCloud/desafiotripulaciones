const pool = require('../utils/db_pgsql')
const usersQueries = require('../queries/users.queries')
const { BigQuery } = require('@google-cloud/bigquery');

const key_path = "./keyBigQuery.json"

const getUserByEmail = async (email) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: usersQueries.getUserByEmail,
            location: 'europe-west1',
            params: {email: email}
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const getAllUsers = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: usersQueries.getUsers,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows
        } catch (error) {
            throw error;
        }
}

const logUser = async (email) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: usersQueries.updateUserLogState,
            location: 'europe-west1',
            params: {state: true, email: email}
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const registerUser = async (userData) => {
    const { id_user, user_name, email, password, registered_date } = userData
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: usersQueries.registerUser,
            location: 'europe-west1',
            params: {id_user: id_user, user_name: user_name, email: email, password: password, registered_date: registered_date}
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();
        return rows
        } catch (error) {
            throw error;
        }
}

module.exports = {
    getAllUsers,
    getUserByEmail,
    registerUser,
    logUser
}