var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var emojiRouter = require('./routes/emoji');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Emoji = require("./models/emoji");
var resourceRouter = require('./routes/resource');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
async function recreateDB() {
  // Delete everything
  await Emoji.deleteMany();
  let instance1 = new
    Emoji({
      emoji_face: "laugh", emoji_hand: 'raise',
      emoji_things: 20
    });
  let instance2 = new Emoji({
    emoji_face: "happy", emoji_hand: 'thumsup',
    emoji_things: 22
  });
  let instance3 = new Emoji({
    emoji_face: "crying", emoji_hand: 'hye',
    emoji_things: 24
  });

  instance1.save().then(() => {
    console.log("First object saved");
  }).catch((err) => {
    console.log(err);
  })

  instance2.save().then(() => {
    console.log("second object saved");
  }).catch((err) => {
    console.log(err);
  })

  instance3.save().then(() => {
    console.log("third object saved");
  }).catch((err) => {
    console.log(err);
  })
}

let reseed= true;
if(reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/emoji', emojiRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
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

// We can seed the collection if needed on
//server start

module.exports = app;
