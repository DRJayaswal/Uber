const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character']
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 character']
        }
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 character long'],
        select: false,
    },
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum:["active","inactive"],
        default:"inactive"
    },
    vehicle:{
        Type:{
            type:String,
            required:true
        },
        Color:{
            type:String,
            required:true
        },
        Number:{
            type:String,
            required:true
        },
        Capacity:{
            type:Number,
            required:true
        },
        Location:{
            lat:{
                type:Number,
                required: true
            },
            lng:{
                type:Number,
                required: true
            }
        }
    }    
},{timestamps:true})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model('Captain', captainSchema);