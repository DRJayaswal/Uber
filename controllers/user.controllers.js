const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator')

module.exports.registerUser = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }


    const { fullName, email, password, socketId } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email: email,
        password: hashedPassword,
        socketId: socketId,
    })

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
}