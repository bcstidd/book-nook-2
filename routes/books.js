var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');


router.get('/', function(req, res, next) {
  res.redirect('./');
});

module.exports = router;
