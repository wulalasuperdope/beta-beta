'use strict';

const router = require('express').Router();

router.use('/routes', require('./routes'));
router.use('/videos', require('./videos'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
