const path = require('path');

const getPage =  (req, res) => {
    if(req.user){
        res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'profile.html'));
    }
    else{
        res.status(404).send('forbidden');
    }
};

module.exports = getPage;