const userModel = require('../models/user.model.js')

module.exports.createUser = async ({ fullName, email, password }) => {

    if (!fullName.firstName || !fullName.lastName || !password) {
        throw new Error('All fields are required');
    }

    const user = await userModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName,
        },
        email:email,
        password:password,
    });

    await user.save();
    
    return user;
};


module.exports.findUserByEmail = async (email) => {
    return await userModel.findOne({ email: email }).select('+password');
} 