const { getAllBooks, getBookById, createBook, deleteById, updateById } = require('../controllers/book-controller')
const { middlware } = require('../middlewares')

const bookRouter = require('express').Router()

bookRouter.get('/', middlware, getAllBooks)
bookRouter.post('/', createBook)
bookRouter.get('/:bookId', getBookById)
bookRouter.delete('/:id', deleteById)
bookRouter.patch('/:id', updateById)

module.exports = bookRouter