const captainModel = require('../models/captain.model.js')

module.exports.createCaptain = async ({fullName, email, password, vehicle}) => {

    if(!fullName.firstName || !fullName.lastName){
        throw new Error('Name is required');
    }

    if(!email){
        throw new Error('Email is required');
    }

    if(!password){
        throw new Error('Password is required');
    }

    if(!vehicle.Type){
        throw new Error('Vehicle type is required');
    }
    
    if(!vehicle.Color){
        throw new Error('Vehicle color is required');
    }

    if(!vehicle.Number){
        throw new Error('Vehicle number is required');
    }

    if(!vehicle.Capacity){
        throw new Error('Vehicle capacity is required');
    }

    if(!vehicle.Location.lat || !vehicle.Location.lng){
        throw new Error('Invalid location');
    }

    const captain = await captainModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email: email,
        password: password,
        vehicle: {
            Type: vehicle.Type,
            Color: vehicle.Color,
            Number: vehicle.Number,
            Capacity: vehicle.Capacity,
            Location: {
                lat: vehicle.Location.lat,
                lng: vehicle.Location.lng
            }
        }
    });
    
    await captain.save();

    return captain;
};


module.exports.findCaptainByEmail = async (email) => {
    return await captainModel.findOne({ email: email }).select('+password');
}