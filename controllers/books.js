const Book = require('../models/book');

module.exports = {
  index,
};

function index(req, res) {
  Book.find({}, function (err, books) {
    res.render("index/books", { books })
    console.log('This hits the books page');
  });
}

function showAll(req, res) {
  Book.findById(req.params.id)
  console.log(all)
  res.render("books/show", { title: "Book Detail", book });

}