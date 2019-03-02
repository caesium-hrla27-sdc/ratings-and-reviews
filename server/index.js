const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3003;
const { Review, Product } = require('../database');
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

const getRatings = (req, res) => {
  let {id} = req.params;

  console.log('IN GET---------');
  console.time('testBeg');
  // let id = 10;
  Product.find({id: id})
    .then(result => {
      console.timeEnd('testBeg');
      res.status(200).json(result);
    })

};

app.get('/ratings/:id', getRatings);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
