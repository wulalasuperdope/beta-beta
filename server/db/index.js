const db = require('./database');
const Route = require('./route');
const Video = require('./video');

Video.belongsTo(Route);
Route.hasMany(Video);

module.exports = {
  db,
  Route,
  Video
};
