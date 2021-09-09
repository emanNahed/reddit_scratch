const {Pool} = require('pg');

const dbUrl= process.env.DB_URL || 'postgres://skoun:emyy2207@localhost:5432/reddit';

const options = {
    connectionString: dbUrl,
};

module.exports = new Pool(options);