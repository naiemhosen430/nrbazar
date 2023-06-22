const jwt = require('jsonwebtoken');
require('dotenv').config();

const cheaklogin = async (req,res, next) => {
    try {
        const token = req.signedCookies.quickshop;
        if (token) {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            res.locals.userobj = decode;
            next();
        } else {
            res.redirect("/login");
        }
    } catch (error) {
        console.log(error)
        res.redirect("/login")
    }
    
}

const stoplogin = (req,res, next) => {
    try {
        const tokenn = req.signedCookies.quickshop;
        if (!tokenn) {
            next()
        } else {
            res.redirect("/loginhome")
        }
    } catch (error) {
    }
    
}

module.exports = {
    cheaklogin,
    stoplogin
};