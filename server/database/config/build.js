const fs = require('fs');
const path = require('path');

const connection = require('./connection.js');

const runSql = ()=> {
    const sql = fs.readFileSync(path.join(__dirname, 'reddit.sql')).toString();

    return connection.query(sql);
}

module.exports= runSql;