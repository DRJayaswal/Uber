const userModel = require('../models/user.model.js')

module.exports.createUser = async ({
    fullName,
    email,
    password,
    socketId,
}) => {
    if (!fullName.firstName || !fullName.lastName || !password) {
        throw new Error('All fields are required');
    }

    return await userModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email: email,
        password: password,
        socketId: socketId,
    })
}


module.exports.findUserByEmail = async (email) => {
    return await userModel.findOne({ email: email }).select('+password');
}