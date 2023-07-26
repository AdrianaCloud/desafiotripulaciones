const pool = require('../utils/db_pgsql')
const usersQueries = require('../queries/users.queries')
const { BigQuery } = require('@google-cloud/bigquery');
const { hashPassword, comparePasswords, generateToken } = require("../utils/authUtils");

const key_path = "./keyBigQuery.json"
// const register = async (req, res)=> {
//     const { user_name, email, password } = req.body;

//     try {
//         // Check if the email already exists
//         const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
//         if (existingUser.rows.length > 0) {
//             return res.status(409).json({ message: "Email already exists" });
//         }

//         // Hash the password
//         const hashedPassword = await hashPassword(password);

//         // Insert the new user into the database
//         const newUser = await pool.query(usersQueries.registerUser,
//             [user_name, email, hashedPassword]
//         );

//         const userPayload = {
//             id_user: newUser.rows[0].id_user,
//             user_name: user_name,
//             email: email
//         }

//         // Generate a JWT token
//         const token = generateToken(userPayload);
//         console.log(token);
        
//         res.status(201).json({
//             msg: "User created successfully",
//             user: newUser.rows[0]
//         });
//     } catch (error) {
//         res.status(400).json({
//             error
//         })
//     }
// }

//Funciona
const getUsers = async (req, res) => {
    try {
        const queryOptions = {
            keyFilename: key_path,
            projectId: "tripulacionesgrupo5"
        }

        const bigquery = new BigQuery(queryOptions);

        const query = `SELECT * FROM tripulacionesgrupo5.app_dataset.la_santitable_test2`;

        const options = {
            query: query,
            // Location must match that of the dataset(s) referenced in the query.
            location: 'europe-west1',
          };

        // Run the query as a job
        const [job] = await bigquery.createQueryJob(options);
        console.log(`Job ${job.id} started.`);
    
        // Wait for the query to finish
        const [rows] = await job.getQueryResults();
    
        // Print the results
        console.log('Rows:');
        rows.forEach(row => console.log(row));

        res.status(200).json({
            msg: rows
        })
    // client = await pool.connect()
    // const data = await client.query(usersQueries.getUsers)
    return data.rows
    } catch (error) {
        console.log(error);
    }
}

// const  login = async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const client = await pool.connect()

//     } catch (error) {
        
//     }
//     }
    

module.exports = {
    // register,
    getUsers,
    // login
}