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

const logOutUser = async (email) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: usersQueries.updateUserLogState,
            location: 'europe-west1',
            params: {state: false, email: email}
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const updateUser = async (userData) => {
    const { email, new_email, user_name } = userData
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: usersQueries.updateUser,
            location: 'europe-west1',
            params: {email: email, new_email: new_email, user_name: user_name}
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const deleteUser = async (email) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: usersQueries.deleteUser,
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
    logUser,
    logOutUser,
    deleteUser,
    updateUser
}