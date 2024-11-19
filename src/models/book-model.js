const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    page: {
        type: Number,
        required: true
    },
    url: { type: String, required: false }
})

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel