const BlackToken = require('../models/blacklist.model.js')
const captainModel = require('../models/captain.model.js')
const captainService = require('../services/captain.service.js')
const {validationResult} = require('express-validator')

module.exports.registerCaptain = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { fullName, email, password, vehicle } = req.body;

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email: email,
        password: hashedPassword,
        vehicle: vehicle
    })

    if(!captain){
        return res.status(404).json({ message: 'Captain not found' });
    }

    const token = captain.generateAuthToken();

    const message = "Captain registered successfully"

    res.status(201).json({
        message: message,
        token: token,
        captain: {
            _id: captain._id,
            fullName: captain.fullName,
            email: captain.email,
            vehicle: captain.vehicle
        }
    });
}


module.exports.loginCaptain = async (req, res) => {

    const error = validationResult(req);
    
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    
    const captain = await captainService.findCaptainByEmail(email);

    if (!captain) {
        return res.status(404).json({ message: "Captain didn't Exists" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Captain Exists, Invalid Password' });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    const message = "Captain logged in successfully"

    res.status(200).json({
        message: message,
        token: token, 
        captain: {
            _id: captain._id,
            fullName: captain.fullName,
            email: captain.email,
            vehicle: captain.vehicle
        }
    });
}

module.exports.logoutCaptain = async (req, res) => {

    res.clearCookie("token");

    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

    await BlackToken.create({ token });

    res.send({ message: "Logged out" });
}

module.exports.captainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain });
}