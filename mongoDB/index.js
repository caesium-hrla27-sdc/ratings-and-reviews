var mongoose = require('mongoose');
mongoose.connect('mongodb://jennifer:password@18.216.145.66:27017/reviews');

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