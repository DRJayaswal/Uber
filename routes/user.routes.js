const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers.js')
const {body} = require('express-validator');

router.post('/register',[
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],userController.registerUser)

module.exports = router;