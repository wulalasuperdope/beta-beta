const db = require('./database');
const Route = require('./route');
const Video = require('./video');
const Gym = require('./gym');

Route.belongsTo(Gym);
Gym.hasMany(Route);

Video.belongsTo(Route);
Route.hasMany(Video);

module.exports = {
  db,
  Route,
  Video,
  Gym
};
