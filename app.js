var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');

/*
 * ----- Start of The main server code -----*/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// we use ejs module for the view engine
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*容許靜態檔案 like .js, .json, .xml, html...*/
app.use(express.static(path.join(__dirname, 'public')));


/*允許 /login 使用loginRouter這個路由*/
app.use('/login', loginRouter);

/*允許 /register 使用registerRouter這個路由*/
app.use('/register', registerRouter);

/*允許 /product 使用productRouter這個路由*/
app.use('/product', productRouter);



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
  res.render('error.ejs');
});


module.exports = app;

