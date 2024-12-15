const express = require('express');
const router = express.Router();
const captainController = require('../controllers/user.controller.js')
const {body} = require('express-validator');
// const userAuthentication = require('../middlewares/auth.middleware.js');

router.post('/register',[
    body('fullName.firstName').notEmpty().withMessage('First name is required'),
    body('fullName.lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],captainController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],captainController.loginUser)

// router.get('/profile',userAuthentication.authUser,userController.userProfile)
// router.get('/logout',userAuthentication.authUser,userController.logoutUser)

module.exports = router;