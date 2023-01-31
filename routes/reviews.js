const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn') 

// router.get('/new', ensureLoggedIn, reviewsCtrl.new);
// // router.get('/new/reviews',ensureLoggedIn, reviewsCtrl.show);


router.post('/books/:id/reviews', reviewsCtrl.create);
router.get('/books/:id/:reviewId/edit',reviewsCtrl.edit)
router.put('/books/:id/:reviewId/reviews', reviewsCtrl.updateReview)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete)
// router.get('/:id/reviews/edit'), reviewsCtrl.edit

module.exports = router