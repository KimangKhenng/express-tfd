const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxLength: 50
    },
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    address: { type: String }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel