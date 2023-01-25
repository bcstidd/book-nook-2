const Book = require('../models/book');

module.exports = {
  index,
  new: newBook
};

function index(req, res) {
  Book.find({}, function (err, books) {
    res.render("books/collection", { books })
    console.log('This hits the home page');
  });
}

function newBook(req, res) {
   res.render('books/new', {title:'Add Book'});
}

function create(req, res) {
  const Book = new Book(req.body)
}