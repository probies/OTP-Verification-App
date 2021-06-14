const User = require('../models/user');

exports.signup = (req, res) => {

    let newotp = Math.floor(100000 + Math.random() * 900000)

        User.findOneAndUpdate({ email: req.body.email },{$set:{otp:newotp}} ).exec((err, user) => {
            if (user) {
                return res.status(200).json({
                    status : true,
                    data : {OTP : newotp},
                    message:'otp sent successfully'
                });
        }
    // console.log(req.body);
      
        const { email } = req.body;
        let otp = Math.floor(100000 + Math.random() * 900000)

        let newUser = new User({  email, otp });
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            // res.json({
            //     user: success
            // });
            res.json({
                status : true,
                data : {OTP : otp},
                message:'User Succesfully Resgistered ! otp sent successfully',
            });
        });
    });
};


exports.signin = (req, res) => {
    const { email, otp } = req.body;
    
    let neotp = otp

    // check if user exist
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                status:false,
                data : {},
                message: 'User with this email does not exist. Please signup.'
            })
        }

        // Verify OTP
        if (user.otp!=neotp) {
            return res.status(400).json({
                    status:false,
                    data : {},
                    message: 'Email and OTP does not match.'
            });
        }
        
        return res.json({
            status:true,
            data:{ otp },
            message:'otp confirmed successfully'
        });
    });
};