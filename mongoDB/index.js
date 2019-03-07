var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

// var reviewSchema = new mongoose.Schema({
//     username: String,
//     ratingsNumber: Number, 
//     eyeColor: String, 
//     hairColor: String,
//     skinTone: String,
//     skinType: String,
//     ageRange: String,
//     skinConcerns: String,
//     notHelpfulCount: Number,
//     helpfulCount: Number,
//     date: Date,
//     review: String
// })

// var Review = mongoose.model('Review', reviewSchema);

var productSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  fiveStarReviews: [],
  fourStarReviews: [],
  threeStarReviews: [],
  twoStarReviews: [],
  oneStarReviews: []
});

var Product = mongoose.model('Product', productSchema);

module.exports = { Product };