const path = require('path');

const getPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'signup.html'));
};

module.exports = getPage;