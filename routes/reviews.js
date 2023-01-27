const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn') 

router.get('/new', ensureLoggedIn, reviewsCtrl.new);
// router.get('/reviews',ensureLoggedIn, reviewsCtrl.show);
router.post('/:id', ensureLoggedIn, reviewsCtrl.create)
router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete)

module.exports = router