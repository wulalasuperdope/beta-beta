const router = require('express').Router();
const { Video } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    let allVideos = await Video.findAll();
    res.status(200).send(allVideos);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
