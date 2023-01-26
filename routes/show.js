var express = require('express');
var router = express.Router();
var showCtrl = require('../controllers/show');


router.get('/books/:id/show', showCtrl.show);

module.exports = router;
