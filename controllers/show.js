module.exports = {
  show,
};


function show(req, res) {
    Book.findById(req.params.id)
      .populate('bookSchema')
      .exec(function (err, book) {
          res.render("books/show-page", { title: "Book Detail", book});
        });
      }