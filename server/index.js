const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const morgan = require('morgan');
const PORT = 3003;
const { Product } = require('../mongoDB/index.js');
const generateProductData = require('./generateMongoData');


const app = express();

// app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

let id = 10000000;

// This function will retrieve

// Product.find().then(result => {
//   if (result.length === 0) {
//     generateData();
//   }
// });

// const getRatings = (req, res) => {
//   let { id } = req.params;
//   Product.findOne({ id }).then(result => {
//     res.status(200).json(result);
//   });
// };

// MONGO QUERIES

// GET REQUEST - GET ALL REVIEWS FOR ONE PRODUCT

const getRatings = (req, res) => {
  let {id} = req.params;

  console.log('IN GET---------');
  console.time('testGet');

  Product.find({id: id})
    .then(result => {
      console.timeEnd('testGet');
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send('err getting reviews', err);
    });

};

// POST REQUEST - POST ONE NEW PRODUCT TO THE DATABASE

const createNewProduct = (req, res) => {
  console.log('IN POST-----------');
  console.time('testPost');

  id++;

  let addedProduct = generateProductData();
  addedProduct.id = id;

  Product.create(addedProduct)
  .then(result => {
    console.timeEnd('testPost');
    res.status(201).send(result);
  })
  .catch(err => {
    res.status(404).send('error creating new product', err);
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

app.get('/ratings/:id', getRatings);

app.post('/ratings', createNewProduct);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
