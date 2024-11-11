const books = require('../models/book-model')

function getAllBooks(req, res) {
    return res.json(books)
}

function getBookById(req, res) {
    const id = req.params.bookId
    const book = books.find((item) => {
        return item.id == id
    })
    return res.json(book)
}

module.exports = { getAllBooks,getBookById }