const bookModel = require('../models/book-model')

async function getAllBooks(req, res) {
    const books = await bookModel.find({})
    return res.json(books)
}

async function updateById(req, res) {
    const id = req.params.id
    const result = await bookModel.updateOne({ _id: id }, req.body)
    return res.json(result)
}

async function getBookById(req, res) {
    const id = req.params.bookId
    // const book = books.find((item) => {
    //     return item.id == id
    // })
    const book = await bookModel.findById(id)
    return res.json(book)
}

async function createBook(req, res) {
    // console.log(req.body)
    //books.push(req.body)
    const book = new bookModel(req.body)
    const result = await book.save()
    //console.log(books)
    return res.send(result)
}

async function deleteById(req, res) {
    const id = req.params.id
    // const index = books.findIndex(item => {
    //     return item.id == id
    // })
    // books.splice(index, 1)
    // console.log(books)
    // return res.json(index)
    const result = await bookModel.deleteOne({ _id: id })
    return res.json(result)
}

module.exports = { getAllBooks, getBookById, createBook, deleteById, updateById }