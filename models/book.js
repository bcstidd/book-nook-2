const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const book = require('../data')

const imageSchema = new Schema({
  title: String,
  link: String,
});

const reviewSchema = new Schema({
    
    review: {
      type: String,
      required: true,
    },
      
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  })


const bookSchema = new Schema ({
  cover: {  
  type: [imageSchema]
    },
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
        required: true,
      },
      reviews: [reviewSchema],
    })
  

module.exports = mongoose.model('Book', bookSchema);

