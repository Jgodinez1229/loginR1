const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
var createError = require('http-errors');
const bodyParser = require('body-parser');

let dotenv = require('dotenv');
dotenv.config();


let mongo = require('./config/dbconfig');


const indexRouter = require('./routes/index');


const usersRoutes = require('./routes/users');

const app = express();
app.use(cors());



// Middleware
// Agregar las siguientes líneas para configurar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRoutes);

module.exports = app;

