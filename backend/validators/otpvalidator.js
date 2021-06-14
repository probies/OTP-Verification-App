const { check } = require('express-validator');

exports.userOtpValidator = [
    check('otp')
    .isLength({ min: 6 })
    .withMessage('OTP must be at least 6 characters long')
];