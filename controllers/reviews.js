const Book = require('../models/book')

module.exports = {
    create,
    updateReview,
    delete: deleteReview,
    edit,
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


async function updateReview(req, res, next) {
    console.log(req.body)
    try {
        const book = await Book.findOne({'reviews._id': req.params.reviewId})
        console.log(book)
        if (!book) return res.redirect('/books')
        const review = book.reviews.id(req.params.reviewId)
        review.content = req.body.content
        review.user = req.user.id
        console.log(review)
        await book.save()
        res.redirect(`/books/${book._id}`)
    } catch(err) {
        return next(err)
    }
}

async function deleteReview(req, res, next) {
    try {
        const book = await Book.findOne({'reviews._id': req.params.id})
        if (!book) return res.redirect('/books')
        book.reviews.remove(req.params.id)
        await book.save()
        res.redirect(`/books/${book._id}`)
    } catch(err) {
        return next(err)
    }
}

function edit(req, res, next) {
    console.log('edit', req.params.reviewId)
    Book.findOne({'reviews._id': req.params.reviewId}, async function(err, b) {
        const review = await b.reviews.id(req.params.reviewId) 
        console.log('review', review)
        res.render(`books/edit`, {
            title: 'Edit Review', b, review
        })
    })
}