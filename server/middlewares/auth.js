const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const cookie_auth = process.env.COOKIE_AUTH;
    const auth_token= req.cookies[cookie_auth];  

    
    if(!auth_token){
        return next();
    }


    jwt.verify(auth_token, process.env.SECRET_TOKEN, (err, data) => {
        if(err){
            return next();
        
        }

        req.user = data;
        next();
    }); 
}


module.exports = isAuth;