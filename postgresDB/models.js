const Sequelize = require('sequelize');
const connection = require('./index.js');

const Product = connection.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fiveStarReviews: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },  
  fourStarReviews: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },  
  threeStarReviews: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
    allowNull: false
  },  
  twoStarReviews: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
    allowNull: false
  },  
  oneStarReviews: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
    allowNull: false
  }
},
  {timestamps: false} 
);












// const Review = connection.define('reviews', {
//   userName: {
//     type: Sequelize.STRING(20),
//     allowNull: false
//   },
//   starRating: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   eyeColor: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   hairColor: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   skinTone: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   skinType: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   ageRange: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   skinConcerns: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   notHelpfulCount: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   helpfulCount: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   date: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   review: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   productId: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }

// },
//   {timestamps: false}
// );

// Review.belongsTo(Product); // should add a productId attribute to Review to hold the primary key value for Product

Product.sync({ force: false });
// Review.sync({ force: false });

module.exports = { Product };


