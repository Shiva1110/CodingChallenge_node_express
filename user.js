const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 21,
        max: 60
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: 'NA'
    }
})

module.exports = mongoose.model('User', UserSchema);