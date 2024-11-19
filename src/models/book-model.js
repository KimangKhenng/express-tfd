const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    page: Number
})

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel