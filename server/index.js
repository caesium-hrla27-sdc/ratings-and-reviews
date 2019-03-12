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


// This function will seed data if none exists

// Product.find().then(result => {
//   if (result.length === 0) {
//     generateData();
//   }
// });

// MONGO QUERIES

// GET REQUEST - GET ALL REVIEWS FOR ONE PRODUCT

const getRatings = (req, res) => {

  let {id} = req.query;

  Product.find({id: id})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send('err getting reviews', err);
    });

};

// POST REQUEST - POST ONE NEW PRODUCT TO THE DATABASE

const createNewProduct = (req, res) => {

  let addedProduct = generateProductData();
  
  let {id} = req.body;

  addedProduct.id = id;

  Product.create(addedProduct)
  .then(() => {
    res.status(201).end();
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

app.get('/ratings/', getRatings);

app.post('/ratings', createNewProduct);

app.delete('/ratings', deleteProduct);

app.patch('/ratings', updateProductName);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
