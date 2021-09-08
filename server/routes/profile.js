const {getProfile, updateProfile} = require('../controllers/profile');
const router= require('express').Router();


router.get('/', getProfile)
.put('/', updateProfile);


module.exports= router;