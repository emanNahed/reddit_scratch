const {getPage, signin} = require('../controllers/login');
const router = require('express').Router();


router.get('/', getPage)
.post('/', signin);


module.exports= router;