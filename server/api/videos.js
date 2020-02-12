const router = require('express').Router();
const { Video } = require('../db');

router.get('/', (req, res, next) => {
  Video.findAll()
    .then(() => res.status(200).send())
    .next(err);
});

module.exports = router;
