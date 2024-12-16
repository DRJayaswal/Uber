const BlackToken = require('../models/blacklist.model.js');
const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const {validationResult} = require('express-validator')

module.exports.registerUser = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { fullName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);


    const user = await userService.createUser({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email: email,
        password: hashedPassword,
    })

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const token = user.generateAuthToken();

    const message = "User registered successfully"

    res.status(201).json({
        message: message,
        token: token,
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
}

module.exports.loginUser = async (req, res) => {

    const error = validationResult(req);
    
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    
    const user = await userService.findUserByEmail(email);

    if (!user) {
        return res.status(404).json({ message: "User didn't Exists" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'User Exists, Invalid Password' });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token);

    const message = "User logged in successfully"

    res.status(200).json({
        message: message,
        token: token, 
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
}

module.exports.logoutUser = async (req, res, next) => {
    
    res.clearCookie("token");

    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

    await BlackToken.create({ token });

    res.send({ message: "Logged out" });
}

module.exports.userProfile = async (req, res, next) => {
    res.status(200).json({ user: req.user });
}