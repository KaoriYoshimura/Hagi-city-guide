const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('user', userSchema)

module.exports = User