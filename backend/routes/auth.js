const express = require('express');
const router = express.Router();
const { signup , signin } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const { userEmailValidator } = require('../validators/auth');
const { userOtpValidator } = require('../validators/otpvalidator');

router.post('/signup', userEmailValidator, runValidation, signup);
router.post('/signin', userOtpValidator, runValidation, signin);
router.get('/signup' ,function(req,res){
    res.json({
        status : false,
        data : {},
        error:'Oops. it seems like you do not have access to this route',
    });
});
router.get('/signin' ,function(req,res){
    res.json({
        status : false,
        data : {},
        error:'Oops. it seems like you do not have access to this route',
    });
});
module.exports = router;
