const { getAllBooks, getBookById } = require('../controllers/book-controller')
const { middlware } = require('../middlewares')

const bookRouter = require('express').Router()

bookRouter.get('/', middlware, getAllBooks)
bookRouter.get('/:bookId', getBookById)

module.exports = bookRouter