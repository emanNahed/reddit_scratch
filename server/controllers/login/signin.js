const bcrypt= require('bcrypt');
const { checkEmail } = require('../../database/queries');
const jwt = require('jsonwebtoken');
const {userLogin} = require('../../utils')

const signin = (req, res) => {
    const user = req.body;

    const userValidation = userLogin.validateAsync(user);

    userValidation
    .then(user => checkEmail(user.email))
    .then(({rows}) =>  {
        return {rows:rows, result: bcrypt.compare(rows[0].password, user.password)};
    })
    .then(({rows, result}) => {
        if(!result){
            throw Error('email or password is not valid');
        }

        //TODO: ? 
        const token = jwt.sign(rows[0], process.env.SECRET_TOKEN);

        res.cookie(process.env.COOKIE_AUTH, token, {httponly: true, secure: true}).redirect('/profile');
    })
    .catch(err => res.status(404).json({err: err.message}));
};


module.exports = signin;