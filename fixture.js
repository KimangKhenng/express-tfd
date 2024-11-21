require('dotenv').config()
const { faker } = require("@faker-js/faker");
const dbConnect = require("./src/db/db");
const userModel = require("./src/models/user-model");
const bookModel = require("./src/models/book-model");

// Connect to DB
dbConnect().catch((err) => {
    console.log(err)
})

const users = 1000
const courses = 500
const books = 5000

async function generate() {
    const userList = []
    for (let i = 0; i < users; i++) {
        const newUser = new userModel({
            userName: faker.internet.username(),
            fullName: faker.person.fullName(),
            dateOfBirth: faker.date.birthdate(),
            age: faker.number.int({ min: 18, max: 100 }),
            address: faker.location.streetAddress()
        })
        userList.push(newUser.id)
        await newUser.save()
        console.log(`User with id: ${newUser.id} saved!`)
    }
    for (let i = 0; i < books; i++) {
        const randomId = userList[Math.floor(Math.random() * userList.length)]
        const randomId2 = userList[Math.floor(Math.random() * userList.length)]
        const newBook = new bookModel({
            title: faker.lorem.sentence(),
            page: faker.number.int({ min: 200, max: 5000 }),
            url: faker.internet.url(),
            author: [randomId, randomId2]
        })
        await newBook.save()
        console.log(`Books with id: ${newBook.id} saved!`)
    }
}
(async () => {
    await generate()
})();
