const Sequelize = require('sequelize');
const connection = require('./index.js');

const Review = connection.define('reviews', {
  userName: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  starRating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eyeColor: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  hairColor: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  skinTone: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  skinType: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  ageRange: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  skinConcerns: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  notHelpfulCount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  helpfulCount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  review: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  productName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

},
  {timestamps: false}
);

Review.sync({ force: false });

module.exports = { Review };


