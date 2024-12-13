const userModel = require('../models/user.model.js');
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator')

module.exports.registerUser = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }


    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:hashedPassword,
    })


    if (user == undefined) {
        console.log('User Registration Failed');
    }
    console.log("User: ", user);
    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
}