const {getPage, signin} = require('../controllers/login');
const signup = require('../controllers/register/signup');
const router = require('express').Router();


router.get('/', getPage)
.post('/', signup);


module.exports= router;