var faker = require('faker');
// var { Product } = require('../database');
var fs = require('fs');

var eyeColorArr = ['Blue', 'Brown', 'Green', 'Gray', 'Hazel'];

var hairColorArr = ['Blonde', 'Brunette', 'Auburn', 'Black', 'Red', 'Gray'];

var skinToneArr = ['Porcelain', 'Fair', 'Light', 'Medium', 'Tan', 'Olive', 'Deep', 'Dark', 'Ebony'];

var skinTypeArr = ['Normal', 'Combination', 'Dry', 'Oily'];

var ageRangeArr = ['13-17', '18-24', '25-34', '35-44', '45-54', 'Over 54'];

var skinConcernsArr = ['Acne', 'Aging', 'Blackheads', 'Calluses', 'Cellulite', 'Cuticles', 'Dark Circles', 
'Dullness', 'Redness', 'Sensitivity', 'Stretch Marks', 'Sun Damage', 'Uneven Skin Tones' ]

const randomizeArr = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generateReviews = (ratingsNumber) => {
  let reviews = [];
  let loopLength = Math.ceil(Math.random() * 2);

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = ratingsNumber;
    reviewObj.eyeColor = randomizeArr(eyeColorArr);
    reviewObj.hairColor = randomizeArr(hairColorArr);
    reviewObj.skinTone = randomizeArr(skinToneArr);
    reviewObj.skinType = randomizeArr(skinTypeArr);
    reviewObj.ageRange = randomizeArr(ageRangeArr);
    reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    reviewObj.notHelpfulCount = 0;
    reviewObj.helpfulCount = 0;
    reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    reviewObj.review = faker.lorem.sentence();

    reviews.push(reviewObj);
  }
  return reviews;
}

const generateMongoData = function (id) {
  let newProduct = {};
  newProduct.id = id;
  newProduct.productName = faker.lorem.words();

  // FIVE STAR REVIEWS
  newProduct.fiveStarReviews = generateReviews(5);

  // FOUR STAR REVIEWS
  newProduct.fourStarReviews = generateReviews(4);

  // THREE STAR REVIEWS
  newProduct.threeStarReviews = generateReviews(3);

  // TWO STAR REVIEWS
  newProduct.twoStarReviews = generateReviews(2);

  // ONE STAR REVIEWS
  newProduct.oneStarReviews = generateReviews(1);
  
  return JSON.stringify(newProduct) + '\n';
}

const generateProductData = () => {
  let newProduct = {};
  
  newProduct.productName = faker.lorem.words();

  // FIVE STAR REVIEWS
  newProduct.fiveStarReviews = generateReviews(5);

  // FOUR STAR REVIEWS
  newProduct.fourStarReviews = generateReviews(4);

  // THREE STAR REVIEWS
  newProduct.threeStarReviews = generateReviews(3);

  // TWO STAR REVIEWS
  newProduct.twoStarReviews = generateReviews(2);

  // ONE STAR REVIEWS
  newProduct.oneStarReviews = generateReviews(1);

  return newProduct;
}

// CREATE THE STREAM ----

// generates 100 products

// writer - createWriteStream

// let writableStream = fs.createWriteStream('productMongoData.json');

// // // writableStream will be "writer" in the function below


// function writeTenMillionTimes() {
//   let id = 0;
//   let i = 10000000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       id++;
//       i--;
//       if (i === 0) {
//         // once the loop is finished, this will write one file to disk
//         writableStream.write(generateMongoData(id));
//         console.log('Finished!!!!!!!!!');
//       } else {
//         // .write adds onto an existing file
//         ok = writableStream.write(generateMongoData(id));
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // once the drain event is complete, continue to write
//       writableStream.once('drain', write);
//     }
//   }
// }

// writeTenMillionTimes();

module.exports = generateProductData;


 