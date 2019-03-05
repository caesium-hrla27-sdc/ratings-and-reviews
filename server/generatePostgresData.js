const faker = require('faker');
// const { Review } = require('../postgresDB/models.js');
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
  let reviewsNum = Math.ceil(Math.random() * 5) + 6;
  let newReviews = '';

  let username;
  let starRating;
  let eyeColor;
  let hairColor;
  let skinTone;
  let skinType;
  let ageRange;
  let skinConcerns;
  let notHelpfulCount;
  let date;
  let review;
  let productId = id;

  for(let i = 0; i < reviewsNum; i++) {
    username = faker.name.firstName();
    starRating = Math.floor(Math.random() * 5);
    eyeColor = randomizeArr(eyeColorArr);
    hairColor = randomizeArr(hairColorArr);
    skinTone = randomizeArr(skinToneArr);
    skinType = randomizeArr(skinTypeArr);
    ageRange = randomizeArr(ageRangeArr);
    skinConcerns = randomizeArr(skinConcernsArr);
    notHelpfulCount = 0;
    helpfulCount = 0;
    date = faker.date.between('2017-01-01', '2019-02-06');
    review = faker.lorem.paragraph();

    newReviews += `${username}, ${starRating}, ${eyeColor}, ${hairColor}, ${skinTone}, ${skinType}, ${ageRange}, ${skinConcerns}, ${notHelpfulCount}, ${helpfulCount}, ${date}, ${review}, ${productId}\n`;
  }
  return newReviews;
};


// CREATE THE STREAM ----

let writableStreamProducts = fs.createWriteStream('productData.csv');
let writableStreamReviews = fs.createWriteStream('reviewData.csv');

// writableStream will be "writer" in the function below

function writeTenMillionTimes() {
  let id = 0;
  let i = 1e7;
  write();
  function write() {
    let ok = true;
    do {
      id++;
      i--;
      if (i === 0) {
        // once the loop is finished, this will write one file to disk
        writableStreamProducts.write(generateProductData(id));
        writableStreamReviews.write(generateReviewData(id));
        console.log('Finished!!!!!!!!!');
      } else {
        // .write adds onto an existing file
        ok = writableStreamProducts.write(generateProductData(id));
        ok = writableStreamReviews.write(generateReviewData(id));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // once the drain event is complete, continue to write
      writableStreamProducts.once('drain', write);
      writableStreamReviews.once('drain', write);
    }
  }
}

// writeTenMillionTimes();

// module.exports = generateData

// 7 seconds for 100,000 records
// 2 minutes, 57 seconds - 1 million records
// 29 minutes, 25 seconds - 10 million records - 33G






 