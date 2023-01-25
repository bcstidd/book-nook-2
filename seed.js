require('dotenv').config()
require('./config/database');
const Book = require('./models/books')
const data = require('./data')
const p1 = Book.deleteMany({})
Promise.all(p1)
    .then(function(results) {
        console.log(results)
        return Book.create(data.books)
        process.exit()
    })