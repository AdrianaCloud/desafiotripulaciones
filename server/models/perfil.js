const perfilQueries = require('../queries/perfil.queries')
const { BigQuery } = require('@google-cloud/bigquery');

const key_path = "./keyBigQuery.json"

const createPerfil = async (perfilData) => {
    const { perfil_id, user_id, preferencias_deportivas, tipo_de_dieta, ciudad, objetivo_entrenamiento, edad, sexo, peso, condicion, altura } = perfilData
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: perfilQueries.createPerfil,
            location: 'europe-west1',
            params: { perfil_id, user_id, preferencias_deportivas, tipo_de_dieta, ciudad, objetivo_entrenamiento, edad, sexo, peso, condicion, altura }
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const updatePerfil = async (perfilData) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: perfilQueries.updatePerfil,
            location: 'europe-west1',
            params: perfilData
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const getPerfiles = async () => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: perfilQueries.getPerfiles,
            location: 'europe-west1'
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

const getPerfilByUserId = async (user_id) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const options = {
            query: perfilQueries.getPerfilByEmail,
            location: 'europe-west1',
            params: { user_id }
          };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        return rows
    } catch (error) {
        throw error
    }
}

module.exports = {
    createPerfil,
    getPerfilByUserId,
    getPerfiles,
    updatePerfil
}