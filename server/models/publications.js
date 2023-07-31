const publicationsQueries = require('../queries/publications.queries')
const { BigQuery } = require('@google-cloud/bigquery');

const key_path = "./keyBigQuery.json"

const getPublications = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: publicationsQueries.getPublications,
            location: 'europe-west1'
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const createPublication = async (publicationData) => {
    const { publication_id, user_id, title, text, item_id, alert, date } = publicationData
    try {

        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }
        
        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: publicationsQueries.createPublication,
            location: 'europe-west1',
            params: {publication_id, user_id, title, text, item_id, alert, date}
        };
        
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const deletePublication = async (publication_id) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        console.log(publication_id)

        const bigquery = new BigQuery(queryOptions);
        const options = {
            query: publicationsQueries.deletePublication,
            location: 'europe-west1',
            params: {publication_id}
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPublications,
    createPublication,
    deletePublication
}