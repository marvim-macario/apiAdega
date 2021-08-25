const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var bodyParser = require('body-parser')
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// parse application/json




app.use('/', indexRouter);


module.exports = app;
