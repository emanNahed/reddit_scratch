const express= require('express');
const {join} = require('path');
const cookieParser = require('cookie-parser');
require('env2')('config.env');
const router = require('./routes');

const app = express();
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());


app.use(router);

app.set('PORT', process.env.PORT || 3000);


module.exports=app;