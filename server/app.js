const express= require('express');
const router = require('./routes');
const {join} = require('path');

const app = express();
require('env2')('config.env');
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);

app.set('PORT', process.env.PORT || 3000);


module.exports=app;