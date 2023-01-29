const Book = require('../models/book');

module.exports = {
  index,
  show,
};

function index(req, res) {
  Book.find({}, function (err, books) {
    res.render("books/index", {title: 'All Books', books})
  });
}

function show(req, res) {
  Book.findById(req.params.id, function(err, book) {
      res.render('books/show', { book})
  })
}

