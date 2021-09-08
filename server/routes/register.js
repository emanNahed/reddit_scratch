const {getReg, postReg} = require('../controllers/register');
const router= require('express').Router();


router.get('/', getReg)
.post('/', postReg);


module.exports= router;