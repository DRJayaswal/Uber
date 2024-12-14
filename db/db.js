const mongoose = require('mongoose')

const connectToDB = () => {
    const uri = process.env.MONGODB_URI;

    mongoose.connect(uri, {
    })
       .then(() => console.log('Connected to MongoDB'))
       .catch(err => console.error('Failed to connect to MongoDB', err));
}

module.exports = connectToDB;