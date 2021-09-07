const express= require('express');
const router = require('./routes');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(router);

app.set('PORT', process.env.PORT || 3000);


module.exports=app;