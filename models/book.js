const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const books = require('../data')

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },     
    author: {
        type: String,
        required: true,
    },
    published: {
        type: Number,
        min: 1696,
        required: true,
     },
    genre: {
        type: [String],
        enum: ['Psychological Thriller', 'Fiction', 'Non-Fiction', 'Historical Fiction', 'Horror', 'Fantasy', 'Drama', 'Biography', 'Mystery', 'Poetry', 'Espistolary Novel', 'Exhibition Catalogue','Gothic'],
        required: true,
    },
    pages: {
        type: Number,
    },
})

module.exports = mongoose.model('Book', bookSchema);