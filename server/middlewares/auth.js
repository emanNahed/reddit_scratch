const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const auth_token= req.cookies;
    
    if(!auth_token){
        return next();
    }


    jwt.verify(auth_token, process.env.COOKIE_AUTH, (err, data) => {
        if(err){
            return next();
        }


        req.user = data;
        next();
    }); 
}


module.exports = isAuth;