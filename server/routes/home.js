const {homePage} = require('../controllers/home');
const router = require('express').Router();

router.get('/', homePage);

module.exports = router;