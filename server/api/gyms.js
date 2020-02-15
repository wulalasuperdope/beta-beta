const router = require('express').Router();
const { Route, Video, Gym } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    let allGyms = await Gym.findAll();
    res.status(200).send(allGyms);
  } catch (err) {
    next(err);
  }
});

router.get('/:gymId', (req, res, next) => {
  Gym.findOne({
    where: { id: req.params.gymId },
    include: [{ model: Route }]
  })
    .then(selectedGym => res.status(200).send(selectedGym))
    .catch(e => next(e));
});

router.get('/:gymId/:routeId', (req, res, next) => {
  Route.findOne({
    where: { id: req.params.routeId },
    include: [{ model: Video }]
  })
    .then(selectedRoute => res.status(200).send(selectedRoute))
    .catch(e => next(e));
});

// router.get('/:gymId/:routeId/:videoId', async (req, res, next) => {
//   Video.findOne({
//     where: { id: req.params.videoId }
//   })
//     .then(selectedVideo => res.status(200).send(selectedVideo))
//     .catch(e => next(e));
// });

module.exports = router;
