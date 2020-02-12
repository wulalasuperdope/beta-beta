'use strict';

const router = require('express').Router();

router.use('/gyms', require('./gyms'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
