const { check } = require('express-validator');

exports.userEmailValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address')
];
