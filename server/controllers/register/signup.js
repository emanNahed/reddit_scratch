const {userReg} = require('../../utils')
const {checkEmail, addUser} = require('../../database/queries');
const bcrypt = require('bcrypt');
const signup = (req, res) => {
    const user = req.body;

    const userValid = userReg.validateAsync(user);
    const userExist = (rows) => {
        if(rows.rowCount > 0){
            throw new Error('user registered');
        }

    };

    userValid
    .then((user) => checkEmail(user.email))
    .then(rows => userExist(rows))
    .then(() => bcrypt.hash(user.password, 10))
    .then((newPass) => addUser(user, newPass))
    .then(()=> res.status(200).redirect('/login'))
    .catch(err => {
      console.log(err.message);
        res.status(404).json({'err':err.message})
    });

};

module.exports = signup;