const express = require('express')
const books = require('./src/models/book-model')
const bookRouter = require('./src/routes/book-route')
const bodyParser = require('body-parser')
const { requestLogger, handleError } = require('./src/middlewares')
const dbConnect = require('./src/db/db')

const PORT = 3000

const app = express()

dbConnect().catch((err) => {
    console.log(err)
})

// Middleware to log request

app.use(bodyParser.json())
app.use(requestLogger)

// app.get('/', middlware, (req, res) => {
//     res.send("Hello World 2")
// })

// app.get('/hello', (req, res) => {
//     // Request query
//     // Request params
//     res.send("Hello World 222")
// })

// // Return book resources
// app.get('/books', (req, res) => {
//     console.log(req.query)
//     // Request query
//     // page, limit, condition
//     return res.json(books)
// })

// // Return book resources
// app.get('/books/:bookId', (req, res) => {
//     const book = books.find((item) => {
//         return item.id == req.params.bookId
//     })
//     return res.json(book)
// })

app.use('/v1/books', bookRouter)

app.use(handleError)

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`)
})