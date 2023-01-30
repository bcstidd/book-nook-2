const express = require('express')
const router = express.Router()
const reviewsRouter = express.Router();

const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn') 

// router.get('/new', ensureLoggedIn, reviewsCtrl.new);
// // router.get('/new/reviews',ensureLoggedIn, reviewsCtrl.show);


router.post('books/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete)

module.exports = router