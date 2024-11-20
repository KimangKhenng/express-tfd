const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    price: {
        type: Number,
        required: true
    },
    url: { type: String, required: false },
    instructors: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    descriptions: {
        type: String,
        required: true
    }
})

const courseModel = mongoose.model('courses', courseSchema)

module.exports = courseModel