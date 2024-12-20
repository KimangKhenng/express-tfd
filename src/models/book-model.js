const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 500
    },
    page: {
        type: Number,
        required: true
    },
    url: { type: String, required: false },
    author: [{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }]
})

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel