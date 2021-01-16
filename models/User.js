const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    lname: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    email: {
        type: String,
        required: true,
        max: 100,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 2048
    }
});

module.exports = mongoose.model('User', userSchema);