const Sequelize = require('sequelize');
const db = require('./database');

const { STRING } = Sequelize;

const Video = db.define('video', {
  name: {
    type: STRING
  },
  videoUrl: {
    type: STRING,
    defaultValue: 'No beta'
  }
});

module.exports = Video;
