const register = require('./register');
const login = require('./login');
const posts = require('./posts');
const profile = require('./profile');
const logout = require('./logout');
const home= require('./home');
const isAuth = require('../middlewares/auth')
const router = require('express').Router();

router.use('/', isAuth, home);
router.use('/register', register);
router.use('/login', login);
router.use('/posts', posts);
router.use('/profile', isAuth, profile);
router.use('/logout', logout);


module.exports= router;