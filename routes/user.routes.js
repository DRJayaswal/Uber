const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers.js')
const {body} = require('express-validator');

router.post('/register',[
    body('fullName.firstName').notEmpty().withMessage('First name is required'),
    body('fullName.lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],userController.loginUser)

router.post('/profile',[

],userController.userProfile)

module.exports = router;