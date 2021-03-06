const {Pool} = require('pg');

const dbUrl_dev= process.env.DB_URL_DEV;
const dbUrl_test= process.env.DB_URL_TEST;
const dbUrl_prod= process.env.DATABASE_URL;

const NODE_ENV = process.env.NODE_ENV;

let dbUrl= dbUrl_prod;

switch(NODE_ENV){
    case 'development': 
        dbUrl= dbUrl_dev;
        break;
    case 'testing': 
        dbUrl = dbUrl_test;
        break;
    case 'production':
        dbUrl= dbUrl_prod;
        break;
}

if(!dbUrl){
    throw Error('No database url');
}
const options = {
    connectionString: dbUrl,
    ssl: {
        rejectUnauthorized: false
    }
};

module.exports = new Pool(options);