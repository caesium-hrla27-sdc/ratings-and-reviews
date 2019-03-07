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
    reviewObj.review = faker.lorem.paragraph();

    reviews.push(reviewObj);
  }
  return reviews;
}

const generateCSVData = function () {
  let newProduct = '';
  let productName = faker.lorem.words();

  let fiveStarReviews;
  let fourStarReviews;
  let threeStarReviews;
  let twoStarReviews;
  let oneStarReviews;

  // FIVE STAR REVIEWS
  fiveStarReviews = generateReviews(5);

  // FOUR STAR REVIEWS
  fourStarReviews = generateReviews(4);

  // THREE STAR REVIEWS
  threeStarReviews = generateReviews(3);

  // TWO STAR REVIEWS
  twoStarReviews = generateReviews(2);

  // ONE STAR REVIEWS
  oneStarReviews = generateReviews(1);

  newProduct += `${productName}, ${JSON.stringify(fiveStarReviews)}, ${JSON.stringify(fourStarReviews)}, ${JSON.stringify(threeStarReviews)}, ${JSON.stringify(twoStarReviews)}, ${JSON.stringify(oneStarReviews)} \n`;
  
  return newProduct;
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

let writableStream = fs.createWriteStream('productData.csv');

// // writableStream will be "writer" in the function below


function writeTenMillionTimes() {
  // let id = 0;
  let i = 1;
  write();
  function write() {
    let ok = true;
    do {
      // id++;
      i--;
      if (i === 0) {
        // once the loop is finished, this will write one file to disk
        writableStream.write(generateCSVData());
        console.log('Finished!!!!!!!!!');
      } else {
        // .write adds onto an existing file
        ok = writableStream.write(generateCSVData());
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // once the drain event is complete, continue to write
      writableStream.once('drain', write);
    }
  }
}

// writeTenMillionTimes();

module.exports = generateProductData;

// 7 seconds for 100,000 records
// 2 minutes, 57 seconds - 1 million records
// 29 minutes, 25 seconds - 10 million records - 33G






 