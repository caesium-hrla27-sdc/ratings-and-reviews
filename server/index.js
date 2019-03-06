const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3003;
const { Product } = require('../mongoDB/index.js');
// const generateData = require('./generateData');


const app = express();

// app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

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

// TESTING MONGO QUERIES

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

// TESTING POSTGRES QUERIES

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

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
