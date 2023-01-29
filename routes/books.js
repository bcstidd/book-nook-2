var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn')
const reviewsCtrl = require('../controllers/reviews')


router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);

// router.get('/new/reviews',ensureLoggedIn, reviewsCtrl.show);
router.post('/:id/reviews', ensureLoggedIn, reviewsCtrl.create)
router.delete('/:id/reviews', ensureLoggedIn, reviewsCtrl.delete)


  
 
module.exports = router;
