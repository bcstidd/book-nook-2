require('dotenv').config();
require('./config/database');

const Book = require('./models/book');
const data = require('./data');



        return Book.create(data.books)
    

// const p1 = Book.deleteMany({})

// Promise.all([p1])
//     .then(function(books) {
//         console.log(books)
//         return Promise.all([
        
//     ])
// })
//     .then(function(results) {
//      console.log(results)
//      process.exit()
// })
    
   

//   Movie.deleteMany({})
//   .then(function(results) {
//     console.log('Deleted movies: ', results);
//     // Now let's delete the performers and return its "promise"
//     return Performer.deleteMany({});
//   })
//   .then(function(results) {
//     console.log('Deleted performers:', results);
//   })
//   .then(function() {
//     // process.exit() "cleanly" shuts down a Node program
//     process.exit();
//   });
