const connection= require('../../config/connection');

const addUser = (userData, password)=>{
    const sqlQuery = {
        text: 'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *',
        values: [userData.username, userData.email, password]
    };

    return connection.query(sqlQuery);
}

module.exports= addUser;