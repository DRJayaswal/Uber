const mongoose = require('mongoose')

const BlackListTokenModel = new mongoose.Schema({
token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: Date.now() + 24 * 60 * 60 * 1000,
    },
})

module.exports = mongoose.model("BlackListTokenModel",BlackListTokenModel);