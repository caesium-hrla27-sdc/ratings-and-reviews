const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('ratingsAndReviews', 'root', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

connection
  .authenticate()
  .then(() => {
    console.log('Success connecting to the postgres database!!!');
  })
  .catch(err => {
    console.log('Unable to connect to the postgres database', err);
  });

module.exports = connection;