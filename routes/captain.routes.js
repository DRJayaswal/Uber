const captainController = require('../controllers/captain.controller.js');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware.js');


router.post('/register', [
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastName').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.Type').isIn([ 'Bike','Car', 'Motorcycle', 'Auto', 'Bus' ]).withMessage('Invalid vehicle type'),
    body('vehicle.Color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.Number').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.Capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.Location.lat').isNumeric().withMessage('Invalid latitude'),
    body('vehicle.Location.lng').isNumeric().withMessage('Invalid longitude'),
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.captainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;