const express = require('express')
const books = require('./src/models/book-model')
const bookRouter = require('./src/routes/book-route')
const { requestLogger } = require('./src/middlewares')
// Sepeate file

// Controller

// Routes


const PORT = 3000

const app = express()

// Middleware to log request


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

app.use('/books', bookRouter)

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`)
})