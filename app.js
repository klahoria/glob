var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const { glob } = require('glob');
const { promisify } = require('util');

var app = express();
const router = express.Router();
app.use(router);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

// console.log(path.join(__dirname, "routes/*/index.js"))
// const routeFiles = glob.sync("routes/**/index.js").filter(file => file !== __filename);

// console.log("Routes found:", routeFiles);

// routeFiles.forEach((file) => {
//   console.log("Loading route:", file);
//   try {

//     const route = require(path.resolve(file));
//     router.use('/', route);

//     app.use((req, res, next) => {
//       var err = new Error('Not Found');
//       err.status = 404;
//       next(err);
//     })

//     app.use((err, req, res, next) => {
//       res.status(err.status || 500);
//       res.json(err);
//     })
    
//   } catch (error) {
//     console.log(error)
//     console.error(`Error loading ${file}:`, error.message);
//   }
// });


async function loadRoutes() {
  try {
    const routeFiles = glob.sync("routes/*/index.js").filter(file => file !== __filename);

    console.log(routeFiles)
    for (const file of routeFiles) {
      const route = require(path.resolve(path.join(__dirname, file)));
      router.use('/', route.default || route);
    }

    app.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json(err);
    });

  } catch (err) {
    console.error('Error in route traversing', err);
  }
}

loadRoutes();


module.exports = app;
