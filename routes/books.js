var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');



router.get('/', booksCtrl.index);
router.get('/', booksCtrl.new);


module.exports = router;
