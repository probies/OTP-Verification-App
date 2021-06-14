const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        otp: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
