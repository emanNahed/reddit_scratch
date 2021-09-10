const logout=  (req, res) => {
    res.clearCookie(process.env.COOKIE_AUTH);
    res.redirect('/');
};

module.exports = logout;