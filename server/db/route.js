const Sequelize = require('sequelize');
const db = require('./database');

const { STRING } = Sequelize;

const Route = db.define('route', {
  grade: {
    type: STRING,
    defaultValue: 'try it'
  },
  holdColor: {
    type: STRING
  },
  wallLocation: {
    type: STRING
  },
  wallDirection: {
    type: STRING
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'No Image'
  }
});

module.exports = Route;