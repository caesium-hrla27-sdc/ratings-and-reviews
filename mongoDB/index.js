var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviewsTest');

var productSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  fiveStarReviews: [],
  fourStarReviews: [],
  threeStarReviews: [],
  twoStarReviews: [],
  oneStarReviews: []
});

productSchema.index({ id: 1 });

var Product = mongoose.model('Product', productSchema);

module.exports = { Product };