const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3003;
const { Product } = require('../postgresDB/models.js');
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

// const getRatings = (req, res) => {
//   let {id} = req.params;

//   console.log('IN GET---------');
//   console.time('testBeg');
//   // let id = 10;
//   Product.find({id: id})
//     .then(result => {
//       console.timeEnd('testBeg');
//       res.status(200).json(result);
//     })

// };

// TESTING POSTGRES QUERIES

const getRatings = (req, res) => {
  let {id} = req.params;

  console.log('IN GET-----------');
  console.time('testGet');

  Product.findAll({
    where: {
      "productId": id
    }
  })
  .then(reviews => {
    console.timeEnd('testGet');
    res.status(200).json(reviews);
  })
  .catch(err => {
    console.log('err getting reviews', err)
  });
}

app.get('/ratings/:id', getRatings);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
