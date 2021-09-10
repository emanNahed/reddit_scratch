const { read } = require('fs');
const path = require('path');

const getPage =  (req, res) => {
    if(req.user){
       res.cookie('isAuth', true);
    }
    else{
        res.clearCookie('isAuth');
    }
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'home.html'));
};


module.exports = getPage;