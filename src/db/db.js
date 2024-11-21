const mongoose = require('mongoose')

const mongoURI = `mongodb://${process.env.MONGO_HOST}:27017`
const dbName = process.env.MONGO_DB

async function dbConnect() {
    mongoose.connection.on('connected', () => {
        console.log("Connected: ", dbName)
    })
    await mongoose.connect(mongoURI, {
        dbName: dbName
    })
}

module.exports = dbConnect