const userModel = require('../models/user.model.js')
const captainModel = require('../models/captain.model.js')
const jwt = require('jsonwebtoken')
const BlackToken = require('../models/blacklist.model.js')

module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Already Logged Out" });
    }

    const isBlack = await BlackToken.findOne({ token });

    if(isBlack){
        return res.status(403).json({ message: "Token is Black" });
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


module.exports.authCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Already Logged Out" });
    }

    const isBlack = await BlackToken.findOne({ token });

    if(isBlack){
        return res.status(403).json({ message: "Token is Black" });
    }

    try {
        
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        
        req.captain = await captainModel.findById(decode._id);
        
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Error with token" });
    }
}
