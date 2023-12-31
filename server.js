const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
const databaseConnection = require('./config/database')
const ensureLoggedIn = require('./config/ensureLoggedIn');


const app = express()
const PORT = process.env.PORT || 3001

//* Middlewares
app.use(logger('dev'))
app.use(express.json())

//check for token and create an req.user prop in the request
app.use(require('./config/checkToken'))

app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use(express.static(path.join(__dirname, 'build')));

//* API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/coupon', require('./routes/api/coupon'))
app.use('/api/category', require('./routes/api/category'))

app.use('/api/orders', ensureLoggedIn, require('./routes/api/order'))
app.use('/api/products', require('./routes/api/product'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

databaseConnection()

app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});