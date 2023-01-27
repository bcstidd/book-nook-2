const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn') 

router.post('/movies/:id/reviews', ensureLoggedIn, reviewsCtrl.create)


router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete)

module.exports = router