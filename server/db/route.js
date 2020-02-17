const Sequelize = require('sequelize');
const db = require('./database');

const { STRING, INTEGER } = Sequelize;

const Route = db.define('route', {
  id: {
    primaryKey: true,
    type: INTEGER
  },
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
  imageUrl: {
    type: STRING,
    defaultValue: 'No Image'
  }
});

module.exports = Route;
