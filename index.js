const express = require('express')
const books = require('./src/models/book-model')
const bookRouter = require('./src/routes/book-route')
const bodyParser = require('body-parser')
const { requestLogger, handleError } = require('./src/middlewares')
const dbConnect = require('./src/db/db')
const userRouter = require('./src/routes/user-routejs')

const PORT = 3000

const app = express()

dbConnect().catch((err) => {
    console.log(err)
})


app.use(bodyParser.json())
app.use(requestLogger)


app.use('/v1/books', bookRouter)
app.use('/v1/users', userRouter)

app.use(handleError)

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`)
})