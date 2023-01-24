const Book = require("../models/book");

module.exports = {
  index,
};

function index(req, res) {
  Book.find({}, function (err, movies) {
    res.render("books/index", { title: "Our Books", books });
  });
}