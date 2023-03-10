var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
// var fs = require('fs')

// const multer = require('multer');
 
// const imageStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 

const session = require('express-session')
const passport = require('passport')
// const User = require('../models/user')

// Load the "secrets" in the .env file
require('dotenv').config();
// Connect to the MongoDB database
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var reviewsRouter = require('./routes/reviews');
// var imageRouter = require('./uploads/images');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));  

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user
  next()
})

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/', reviewsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
