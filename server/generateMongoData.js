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

var generateData = function () {
  let newProduct = '';
  let productName = faker.lorem.words();

  let fiveStarReviews = [];
  let fourStarReviews = [];
  let threeStarReviews = [];
  let twoStarReviews = [];
  let oneStarReviews = [];

  // FIVE STAR REVIEWS

  let loopLength = Math.ceil(Math.random() * 2)

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = 5
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


    fiveStarReviews.push(reviewObj);

  }

      // FOUR STAR REVIEWS

  loopLength = Math.ceil(Math.random() * 2)

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = 4
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

    fourStarReviews.push(reviewObj);

  }

  // THREE STAR REVIEWS

  loopLength = Math.ceil(Math.random() * 2)

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = 3
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

    threeStarReviews.push(reviewObj);

  }

  // TWO STAR REVIEWS

  loopLength = Math.ceil(Math.random() * 2)

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = 2
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

    twoStarReviews.push(reviewObj);

  }

  // ONE STAR REVIEWS

  loopLength = Math.ceil(Math.random() * 2)

  for(let i = 0; i < loopLength; i++) {
    let reviewObj = {};
    reviewObj.username = faker.name.firstName();
    reviewObj.ratingsNumber = 1
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

    oneStarReviews.push(reviewObj);

  }

  newProduct += `${productName}, ${JSON.stringify(fiveStarReviews)}, ${JSON.stringify(fourStarReviews)}, ${JSON.stringify(threeStarReviews)}, ${JSON.stringify(twoStarReviews)}, ${JSON.stringify(oneStarReviews)} \n`;
  
  return newProduct;
}

// CREATE THE STREAM ----

// generates 100 products

// writer - createWriteStream

let writableStream = fs.createWriteStream('productData.csv');

// // writableStream will be "writer" in the function below


function writeTenMillionTimes() {
  // let id = 0;
  let i = 3;
  write();
  function write() {
    let ok = true;
    do {
      // id++;
      i--;
      if (i === 0) {
        // once the loop is finished, this will write one file to disk
        writableStream.write(generateData());
        console.log('Finished!!!!!!!!!');
      } else {
        // .write adds onto an existing file
        ok = writableStream.write(generateData());
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // once the drain event is complete, continue to write
      writableStream.once('drain', write);
    }
  }
}

writeTenMillionTimes();



// module.exports = generateData

// 7 seconds for 100,000 records
// 2 minutes, 57 seconds - 1 million records
// 29 minutes, 25 seconds - 10 million records - 33G






 