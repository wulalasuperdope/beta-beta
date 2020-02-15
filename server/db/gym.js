const Sequelize = require('sequelize');
const db = require('./database');
const image = require('./attachments');

const { STRING } = Sequelize;

const Gym = db.define('gym', {
  name: {
    type: STRING
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'No Image'
  },
  map: {
    type: STRING,
    defaultValue: 'No Map'
  }
});

module.exports = Gym;
