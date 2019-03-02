const faker = require('faker');
const { Product, Review } = require('../postgresDB/models.js');
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

const generateProductData = function (id) {
  let productName = faker.lorem.words();

  let newProduct = { id, productName };
  
  return JSON.stringify(newProduct);
};

const generateReviewData = function() {
  let newReview = {};

  let reviewsNum = Math.ceil(Math.random() * 5) + 6;

  for(let i = 0; i < reviewsNum; i++) {
    newReview.username = faker.name.firstName();
    newReview.ratingsNumber = Math.floor(Math.random() * 5);
    newReview.eyeColor = randomizeArr(eyeColorArr);
    newReview.hairColor = randomizeArr(hairColorArr);
    newReview.skinTone = randomizeArr(skinToneArr);
    newReview.skinType = randomizeArr(skinTypeArr);
    newReview.ageRange = randomizeArr(ageRangeArr);
    newReview.skinConcerns = randomizeArr(skinConcernsArr);
    newReview.notHelpfulCount = 0;
    newReview.helpfulCount = 0;
    newReview.date = faker.date.between('2017-01-01', '2019-02-06');
    newReview.review = faker.lorem.paragraph();
  }

  return JSON.stringify(newReview);
};



// CREATE THE STREAM ----

// generates 100 products

// writer - createWriteStream

// let writableStream = fs.createWriteStream('reviewData.txt');

// // writableStream will be "writer" in the function below


// // function writeTenMillionTimes() {
// //   let id = 0;
// //   let i = 1e7;
// //   write();
// //   function write() {
// //     let ok = true;
// //     do {
// //       id++;
// //       i--;
// //       if (i === 0) {
// //         // once the loop is finished, this will write one file to disk
// //         writableStream.write(generateData(id));
// //         console.log('Finished!!!!!!!!!');
// //       } else {
// //         // .write adds onto an existing file
// //         ok = writableStream.write(generateData(id));
// //       }
// //     } while (i > 0 && ok);
// //     if (i > 0) {
// //       // once the drain event is complete, continue to write
// //       writableStream.once('drain', write);
// //     }
// //   }
// // }

// // writeTenMillionTimes();



// module.exports = generateData

// 7 seconds for 100,000 records
// 2 minutes, 57 seconds - 1 million records
// 29 minutes, 25 seconds - 10 million records - 33G






 