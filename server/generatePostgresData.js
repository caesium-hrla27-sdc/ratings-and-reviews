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
  let newProduct;
  let productName = faker.lorem.words();

  newProduct = `${id}, ${productName}\n`;

  return newProduct;
  
};

const generateReviewData = function(id) {
  let newReview;
  let reviewsNum = Math.ceil(Math.random() * 5) + 6;

  for(let i = 0; i < reviewsNum; i++) {
    let username = faker.name.firstName();
    let starRating = Math.floor(Math.random() * 5);
    let eyeColor = randomizeArr(eyeColorArr);
    let hairColor = randomizeArr(hairColorArr);
    let skinTone = randomizeArr(skinToneArr);
    let skinType = randomizeArr(skinTypeArr);
    let ageRange = randomizeArr(ageRangeArr);
    let skinConcerns = randomizeArr(skinConcernsArr);
    let notHelpfulCount = 0;
    let helpfulCount = 0;
    let date = faker.date.between('2017-01-01', '2019-02-06');
    let review = faker.lorem.paragraph();
    let productId = id;
  }
  
  newReview = `${username}, ${starRating}, ${eyeColor}, ${hairColor}, ${skinTone}, ${skinType}, ${ageRange}, ${skinConcerns}, ${notHelpfulCount}, ${helpfulCount}, ${date}, ${review}\n`  // will need to add new line at the end

  return newReview;
};



// CREATE THE STREAM ----

// generates 100 products


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






 