const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:22236"
const dbName = "tfd-db"

async function dbConnect() {
    mongoose.connection.on('connected', () => {
        console.log("Connected: ", dbName)
    })
    await mongoose.connect(mongoURI, {
        dbName: dbName
    })
}

module.exports = dbConnect