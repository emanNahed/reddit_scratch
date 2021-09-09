const path = require('path');

const getPage =  (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'login.html'));
};


module.exports = getPage;