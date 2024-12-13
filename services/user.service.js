const userModel = require('../models/user.model.js')

module.exports.createUser = async ({
    firstName,
    lastName,
    email,
    password,
    socketId,
}) => {
    if (!firstName || !lastName || !password) {
        throw new Error('All fields are required');
    }

    const user = await userModel.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        socketId: socketId,
    })
}
