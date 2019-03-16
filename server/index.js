const nr = require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const morgan = require('morgan');
const PORT = 3003;
const { Product } = require('../mongoDB/index.js');
const generateProductData = require('./generateMongoData');
const redisClient = require('redis').createClient;
const redis = redisClient(6379, '3.18.113.171');

redis.on('error', (err) => {
  console.log('error',err);
  return err;
})
redis.on("ready", function () {
  console.log("Redis is ready");
});


const app = express();

// app.use(morgan('dev'));
// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));


// This function will seed data if none exists

// Product.find().then(result => {
//   if (result.length === 0) {
//     generateData();
//   }
// });

// MONGO QUERIES

// GET REQUEST - GET ALL REVIEWS FOR ONE PRODUCT

// this function will need to look in the cache first (Redis)
  // if found
      // return result
  //if not in the cache
      // look in the database (Mongo)
      // return result

const findProductByIdCached = function (id, callback) {
  redis.get(id, function(err, reply) {
    if (err) {
      callback(err, null);
    } else if (reply) { // Product exists in cache
      callback(reply);
    } else {
      // Product doesn't exist in cache - we need to query the main database
      Product.find({id: id})
        .then(result => {
          redis.set(id, JSON.stringify(result), function() {
            callback(result);
          });
        })
        .catch(err => {
          callback(err, null)
        });
    }
  })
}

const getRatings = (req, res) => {

  let {id} = req.query;
  
  findProductByIdCached(id, function(product) {
    if (!product) {
      res.status(500).end();
    } else {
      res.status(200).send(product);
    }
  });
};


// POST REQUEST - POST ONE NEW PRODUCT TO THE DATABASE

const createNewProduct = (req, res) => {

  // let addedProduct = generateProductData();
  
  let {id, userName, eyeColor, hairColor, skinTone, skinType, ageRange, skinConcerns, date, review} = req.body;

  Product.findOneAndUpdate(
    {id: id}, 
    {$push: {oneStarReviews: 
      {
        "userName": userName,
        "eyeColor": eyeColor,
        "hairColor": hairColor,
        "skinTone": skinTone,
        "skinType": skinType,
        "ageRange": ageRange,
        "skinConcerns": skinConcerns,
        "date": date,
        "review": review
      } 
    }   
  })
  .then(() => {
    res.status(201).send('success creating new product');
  })
  .catch(err => {
    res.status(404).send('error creating new product', err);
  });
}

// DELETE REQUEST - DELETE ONE PRODUCT FROM THE DATABASE

const deleteProduct = (req, res) => {

  let {id} = req.query;

  Product.deleteOne({ id: id })
  .then(() => {
    console.timeEnd('testDelete');
    res.status(202).end();
  })
  .catch(err => {
    res.status(404).send('Error deleting item', err);
  });
}

const updateProductName = (req, res) => {

  let { id } = req.query;
  let { productName } = req.body;

  Product.updateOne({ id: id }, { productName: productName } )
  .then(() => {
    console.timeEnd('testUpdate');
    res.status(201).end();
  })
  .catch(err => {
    res.status(404).send('Error updating item', err)
  });

}

// POSTGRES QUERIES

// const getRatings = (req, res) => {
//   let {id} = req.params;

//   console.log('IN GET-----------');
//   console.time('testGet');


  // findAll({
  //   where: {
  //     "productId": id
  //   }
  // })
//   connection.query('SELECT * FROM reviews WHERE "productId" = ' + id)
//   .then(reviews => {
//     console.timeEnd('testGet');
//     res.status(200).send(reviews);
//   })
//   .catch(err => {
//     res.status(404).send('err getting reviews');
//   });
// }

app.get('/ratings', getRatings);

// app.post('/ratings', createNewProduct);

// app.delete('/ratings', deleteProduct);

// app.patch('/ratings', updateProductName);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
