const express = require('express');
const path = require('path');

const app = express();

//body parsing middleware
app.use(express.json());
// static middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../sources')));

app.use('/api', require('./api'));
// send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling endware
app.use('/', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message } || 'Internal server error');
});

module.exports = app;
