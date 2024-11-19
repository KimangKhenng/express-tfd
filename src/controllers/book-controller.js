const bookModel = require('../models/book-model')
const asyncHandler = require('express-async-handler')

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await bookModel.find({})
    return res.json(books)
})

const updateById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await bookModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

const getBookById = asyncHandler(async (req, res) => {
    const id = req.params.bookId
    const book = await bookModel.findById(id)
    return res.json(book)
})

const createBook = asyncHandler(async (req, res) => {
    const book = new bookModel(req.body)
    const result = await book.save()
    return res.send(result)
})

const deleteById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await bookModel.deleteOne({ _id: id })
    return res.json(result)
})

module.exports = { getAllBooks, getBookById, createBook, deleteById, updateById }