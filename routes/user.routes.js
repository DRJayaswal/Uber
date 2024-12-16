const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller.js')
const userAuth = require('../middlewares/auth.middleware.js');

router.post('/register',[
    body('fullName.firstName')
        .notEmpty()
        .withMessage('First name is required'),
    body('fullName.lastName')
        .notEmpty()
        .withMessage('Last name is required'),
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),
    body('password')
        .isLength({min:8})
        .withMessage('Password must be at least 8 characters long'),
    ]
    ,userController.registerUser
);

router.post('/login',[
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),
    body('password')
        .isLength({min:8})
        .withMessage('Password must be at least 8 characters long'),
    ]
    ,userController.loginUser
);

router.get('/profile',
    userAuth.authUser,
    userController.userProfile
);

router.get('/logout',
    userAuth.authUser,
    userController.logoutUser
);

module.exports = router;