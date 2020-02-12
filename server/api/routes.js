const router = require('express').Router();
const { Route, Video } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    let allRoutes = await Route.findAll();
    res.status(200).send(allRoutes);
  } catch (err) {
    next(err);
  }
});

router.get('/:routeId', (req, res, next) => {
  Route.findAll({
    where: { id: req.params.routeId },
    include: [{ model: Video }]
  })
    .then(selectedRoute => res.status(200).send(selectedRoute))
    .catch(e => next(e));
});

module.exports = router;
