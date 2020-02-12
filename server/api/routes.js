const router = require('express').Router();
const { Route, Video } = require('../db');

router.get('/', (req, res, next) => {
  Route.findAll()
    .then(() => res.status(200).send())
    .next(err);
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
