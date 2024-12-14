const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            // required: true,
            minlength: [3, 'First name must be at least 3 character']
        },
        lastName: {
            type: String,
            // required: true,
            minlength: [3, 'Last name must be at least 3 character']
        }
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },
    password: {
        type: String,
        // required: true,
        minlength: [8, 'Password must be at least 8 character long'],
        select: false,
    },
    socketId: {
        type: String,
        // required: true
    }
})


userSchema.methods.generateAuthToken = async () => {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};


module.exports = mongoose.model('User', userSchema);