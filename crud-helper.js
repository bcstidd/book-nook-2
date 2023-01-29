
require('dotenv').config();
// Connect to the database
require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Book = require('./models/book');


/*--- Define Variables to Hold Documents ---*/
let book, books;


/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
Book.find({}).then(console.log);

console.log('Time to CRUD!');