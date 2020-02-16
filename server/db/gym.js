const Sequelize = require('sequelize');
const db = require('./database');

const { STRING } = Sequelize;

const Gym = db.define('gym', {
  name: {
    type: STRING
  },
  image: {
    type: STRING,
    defaultValue: 'No Image'
  },
  map: {
    type: STRING,
    defaultValue: 'No Map'
  }
});

module.exports = Gym;
