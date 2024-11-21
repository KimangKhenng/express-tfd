require('dotenv').config()
const express = require('express')
const bookRouter = require('./src/routes/book-route')
const bodyParser = require('body-parser')
const { requestLogger, handleError } = require('./src/middlewares')
const dbConnect = require('./src/db/db')
const userRouter = require('./src/routes/user-routejs')

const PORT = process.env.PORT

const app = express()

dbConnect().catch((err) => {
    console.log(err)
})


app.use(bodyParser.json())
app.use(requestLogger)

// Exercise
/**
 * Finish Course Controller, Course Routes, Course Fixture
 */

app.use('/v1/books', bookRouter)
app.use('/v1/users', userRouter)

app.use(handleError)

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`)
})