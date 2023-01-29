const Book = require('../models/book')

module.exports = {
    create,
    delete: deleteReview,
};
	

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        book.reviews.push(req.body)
        book.save(function(err) {
            res.redirect(`/books/${book._id}`)
    })
})
}

async function deleteReview(req, res, next) {
    try {
        const Book = await Book.findOne({'reviews._id': req.params.id})
        if (!book) return res.redirect('/books')
        book.reviews.remove(req.params.id)
        await book.save()
        res.redirect(`/books/${book._id}`)
    } catch(err) {
        return next(err)
    }
}

