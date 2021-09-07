const register = require('./register');
const login = require('/login');
const posts = require('./posts');
const profile = require('./profile');
const logout = require('./logout');


const router = require('express').Router();


router.use('/register', register);
router.use('/login', login);
router.use('/posts', posts);
router.use('/profile', profile);
router.use('/logout', logout);


module.exports= router;