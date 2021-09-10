const path = require('path');

const getPage =  (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'home.html'));
};


module.exports = getPage;