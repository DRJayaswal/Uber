const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const BlackListTokenModel = require('../models/blacklist.model.js')

module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Already Logged Out" });
    }

    const isBlackListed = await BlackListTokenModel.findOne({ token });

    if(isBlackListed){
        return res.status(403).json({ message: "Token is Blacklisted" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decode._id);
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Error with token" });
    }
}