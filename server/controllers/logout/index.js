const logout=  (req, res) => {
    req.clearCookie(process.env.COOKIE_AUTH);
    res.redirect('/');
};

module.exports = logout;