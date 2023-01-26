const Book = require('../models/book');

module.exports = {
  index,
};

function index(_req, res) {
  Book.find({}, function (err, books) {
    res.render("books/index", {title: 'All Books', books})
    // console.log('data');
  });
}

