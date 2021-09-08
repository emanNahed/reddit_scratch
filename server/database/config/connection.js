const {Pool} = require('pg');

const dbUrl= process.env.DB_URL_PROD;

const options = {
    connectionString: dbUrl,
    // ssl: {
    //     rejectUnauthorized: false
    // }
};

module.exports = new Pool(options);