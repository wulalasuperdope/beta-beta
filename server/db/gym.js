const Sequelize = require('sequelize');
const db = require('./database');

const { STRING } = Sequelize;

const Gym = db.define('gym', {
  name: {
    type: STRING
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'No Image'
  }
});

module.exports = Gym;
