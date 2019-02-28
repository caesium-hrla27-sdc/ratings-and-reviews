var faker = require('faker');
var { Review, Product } = require('../database');
var fs = require('fs');

var eyeColorArr = ['Blue', 'Brown', 'Green', 'Gray', 'Hazel'];

var hairColorArr = ['Blonde', 'Brunette', 'Auburn', 'Black', 'Red', 'Gray'];

var skinToneArr = ['Porcelain', 'Fair', 'Light', 'Medium', 'Tan', 'Olive', 'Deep', 'Dark', 'Ebony'];

var skinTypeArr = ['Normal', 'Combination', 'Dry', 'Oily'];

var ageRangeArr = ['13-17', '18-24', '25-34', '35-44', '45-54', 'Over 54'];

var skinConcernsArr = ['Acne', 'Aging', 'Blackheads', 'Calluses', 'Cellulite', 'Cuticles', 'Dark Circles', 
'Dullness', 'Redness', 'Sensitivity', 'Stretch Marks', 'Sun Damage', 'Uneven Skin Tones' ]


var id = 0;

const randomizeArr = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

// generates 100 products

var generateData = function () {
  for(var i = 0; i < 10000; i++) {
      id++;
      let productName = faker.lorem.words();
      let fiveStarReviews =[];
      let fourStarReviews =[];
      let threeStarReviews =[];
      let twoStarReviews =[];
      let oneStarReviews =[];

      // FIVE STAR REVIEWS
        // generates anywhere from 60-150 reviews

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

          let reviewDoc = new Review(reviewObj);

          // Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
          //     skinConcerns, notHelpful, helpful, date, review
          // })
          fiveStarReviews.push(reviewDoc);

      }

      // FOUR STAR REVIEWS
        // 25-50 reviews

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

          let reviewDoc = new Review(reviewObj);

          // Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
          //     skinConcerns, notHelpful, helpful, date, review
          // })
          fourStarReviews.push(reviewDoc);

      }



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

          let reviewDoc = new Review(reviewObj);

          // Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
          //     skinConcerns, notHelpful, helpful, date, review
          // })
          threeStarReviews.push(reviewDoc);

      }

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

          let reviewDoc = new Review(reviewObj);

          // Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
          //     skinConcerns, notHelpful, helpful, date, review
          // })
          twoStarReviews.push(reviewDoc);

      }

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

          let reviewDoc = new Review(reviewObj);

          // Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
          //     skinConcerns, notHelpful, helpful, date, review
          // })
          oneStarReviews.push(reviewDoc);

      }

      let newDocument = {id, productName, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews};

      if (i === 0) {
        fs.writeFile('reviewData.txt', JSON.stringify(newDocument), function(err) {
          if (err) {
            console.log('error writing data', err);
          }
        });
      } else {
        fs.appendFile('reviewData.txt', JSON.stringify(newDocument), function(err) {
          if (err) {
            console.log('error appending to file', err);
          }
        });
      }

      // for each iteration of the for loop
        // if index === 0, use fs.writeFile
        // otherwise, use fs.appendFile

      // test this at 100, 1000, etc. records


      // Product.create({id, productName, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews})

  }

  console.log('txt file created');
}

module.exports = generateData





// for(let i = 0; i < 100; i++) {
//     var username = faker.name.firstName();
//     var ratingsCount = Math.floor(Math.random() * 4) + 1
//     var eyeColor = eyeColorArr[Math.floor(Math.random() * 4) + 0]
//     var hairColor = hairColorArr[Math.floor(Math.random() * 5) + 0]
//     var skinTone = skinToneArr[Math.floor(Math.random() * 8) + 0]
//     var skinType = skinTypeArr[Math.floor(Math.random() * 3) + 0]
//     var ageRange = ageRangeArr[Math.floor(Math.random() * 5) + 0]
//     var skinConcerns = skinConcernsArr[Math.floor(Math.random() * 12) + 0]
//     var notHelpfulCount = 0;
//     var helpfulCount = 0;
//     var date = faker.date.between('2017-01-01', '2019-02-06');
//     var review = faker.lorem.paragraph();

//     Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
//         skinConcerns, notHelpful, helpful, date, review
//     })
// }   

 