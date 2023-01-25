const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        enum: ['Not Listed', 'Fiction', 'Non-Fiction', 'Historical Fiction', 'Horror', 'Fantasy', 'Drama', 'Biography', 'Mystery', 'Poetry'],
        required: true,
    },
    rating: [ratingSchema],
})

module.exports = mongoose.model('Book', bookSchema);