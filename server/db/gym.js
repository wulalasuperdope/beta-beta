const Sequelize = require('sequelize');
const db = require('./database');

const { STRING } = Sequelize;

const Gym = db.define('gym', {
  name: {
    type: STRING
  },
  state: {
    type: STRING
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'No Image'
  },
  mapUrl: {
    type: STRING,
    defaultValue: 'No Map'
  }
});

module.exports = Gym;
