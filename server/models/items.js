const itemsQueries = require('../queries/items.queries')
const { BigQuery } = require('@google-cloud/bigquery');

const key_path = "./keyBigQuery.json"

const getItemById = async (id) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getItemById,
            location: 'europe-west1',
            params: { ID: parseInt(id) }
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows
        } catch (error) {
            throw error;
        }
}

const getSendas = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getSendas,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 5)
        } catch (error) {
            throw error;
        }
}

const getParquesYJardines = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getParquesYJardines,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 5)
        } catch (error) {
            throw error;
        }
}

const getFuentes = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getFuentes,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 8)
        } catch (error) {
            throw error;
        }
}

const getPolideportivos = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getPolideportivos,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 8)
        } catch (error) {
            throw error;
        }
}

const getCentrosSalud = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getCentrosSalud,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows
        } catch (error) {
            throw error;
        }
}

const getPiscinas = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getPiscinas,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 8)
        } catch (error) {
            throw error;
        }
}

const getInfCiclista = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: itemsQueries.getInfCiclista,
            location: 'europe-west1',
          };

        const [job] = await bigquery.createQueryJob(options);
    
        const [rows] = await job.getQueryResults();

        return rows.slice(0, 8)
        } catch (error) {
            throw error;
        }
}

module.exports = {
    getSendas,
    getFuentes,
    getCentrosSalud,
    getParquesYJardines,
    getPiscinas,
    getPolideportivos,
    getInfCiclista,
    getItemById
}