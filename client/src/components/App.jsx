import React from 'react';
import styles from './app.css';
import axios from 'axios';
import Ratings from 'react-ratings-declarative';
import QuestionMark from './QuestionMark.jsx';
import FilterBar from './FilterBar.jsx';
import Review from './Review.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 6,
      filterByObj : {}
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(filterObj) {   
    let newReviewsArr = [];
    if(this.state.oldReviewArr !== undefined) {
      let index = 0;
      for(let key in filterObj) {
        if(index === 0) {
          index++
          for(let i = 0; i < filterObj[key].length; i++) {
            for(let j = 0; j < this.state.oldReviewArr.length; j++) {
              if(this.state.oldReviewArr[j][key] === filterObj[key][i]) {
                newReviewsArr.push(this.state.oldReviewArr[j])
              }
            }
          }
        } else {
          let anotherNewReviewsArr = [];
          for(let i = 0; i < filterObj[key].length; i++) {
            for(let j = 0; j < newReviewsArr.length; j++) {
              if(newReviewsArr[j][key] === filterObj[key][i]) {
                anotherNewReviewsArr.push(newReviewsArr[j])
              }
            }
          }
          newReviewsArr = anotherNewReviewsArr
        }
      }
      let newRenderedArr = newReviewsArr.slice(0, this.state.index);
      this.setState({reviewsArr : newReviewsArr, renderedArr : newRenderedArr})
    } else {
      for(let key in filterObj) {
          for(let i = 0; i < filterObj[key].length; i++) {
            for(let j = 0; j < this.state.reviewsArr.length; j++) {
              if(this.state.reviewsArr[j][key] === filterObj[key][i]) {
                newReviewsArr.push(this.state.reviewsArr[j])
              }
            }
          }
        }
        let oldReviewArr = this.state.reviewsArr;
        let newRenderedArr = newReviewsArr.slice(0, this.state.index);
        this.setState({reviewsArr : newReviewsArr, renderedArr : newRenderedArr, oldReviewArr}, () => console.log(this.state.renderedArr))
      }
  }

  updateIndex() {
    let newIndex = this.state.index + 6;
    this.setState({
      renderedArr: this.state.reviewsArr.slice(0, newIndex),
      index: newIndex
    });
  }

  componentDidMount() {
    axios.get('/ratings/5')
    .then(results => {
      let reviewNum =
        results.data.fiveStarReviews.length +
        results.data.fourStarReviews.length +
        results.data.threeStarReviews.length +
        results.data.twoStarReviews.length +
        results.data.oneStarReviews.length;
      let fiveStarCount = results.data.fiveStarReviews.length;
      let fourStarCount = results.data.fourStarReviews.length;
      let threeStarCount = results.data.threeStarReviews.length;
      let twoStarCount = results.data.twoStarReviews.length;
      let oneStarCount = results.data.oneStarReviews.length;

      let fiveStarReviewsPercentage =
        (results.data.fiveStarReviews.length / reviewNum) * 100;
      let fourStarReviewsPercentage =
        (results.data.fourStarReviews.length / reviewNum) * 100;
      let threeStarReviewsPercentage =
        (results.data.threeStarReviews.length / reviewNum) * 100;
      let twoStarReviewsPercentage =
        (results.data.twoStarReviews.length / reviewNum) * 100;
      let oneStarReviewsPercentage =
        (results.data.oneStarReviews.length / reviewNum) * 100;


      let starAverage =
        (fiveStarCount * 5 +
          fourStarCount * 4 +
          threeStarCount * 3 +
          twoStarCount * 2 +
          oneStarCount) /
        reviewNum;
      starAverage = parseFloat(starAverage.toFixed(1));

      let reviewsArr = results.data.fiveStarReviews.concat(
        results.data.fourStarReviews.concat(
          results.data.threeStarReviews.concat(
            results.data.twoStarReviews.concat(results.data.oneStarReviews)
          )
        )
      );


      let renderedArr = reviewsArr.slice(0, this.state.index);

      this.setState(
        {
          reviewNum,
          fiveStarReviewsPercentage,
          fourStarReviewsPercentage,
          threeStarReviewsPercentage,
          twoStarReviewsPercentage,
          oneStarReviewsPercentage,
          fiveStarCount,
          fourStarCount,
          threeStarCount,
          twoStarCount,
          oneStarCount,
          starAverage,
          reviewsArr,
          renderedArr
        }
      );
    });
  }

  sortByLowestRating() {
    for(let i = arr.length - 1; i >= 0; i--) {
      for(let j = 1; j <= i; j++) {
        if(arr[j-1].helpfulCount > arr[j].helpfulCount){
          let temp = arr[j-1]
          arr[j-1] = arr[j]
          arr[j] = temp;
        }
      }
    }
    return arr;
  }



  render() {
    if (this.state.reviewsArr !== undefined) {
      return (
        <div id="main-container">
        <div id="main">
          <div id='review-top-divider'></div>
          <div id="ratings-reviews">
            <h2 id="header">Ratings & Reviews</h2>
            <div id="write-review-and-charts">
              <div id="write-a-review">
                <span>{this.state.reviewNum} reviews</span>
                <button id="btn-write-a-review" type="button">
                  Write a review
                </button>
              </div>
              <div id="charts">
                <div id="histogram-container">
                  <table id="histogram">
                    <tbody>
                      <tr>
                        <td id="histogram-box-td-left">5 stars</td>
                        <td id="histogram-box-td">
                          <div id="histogram-box">
                            <div
                              id="histogram-box-percentage"
                              style={{
                                width:
                                  this.state.fiveStarReviewsPercentage + '%'
                              }}
                            />
                          </div>
                        </td>
                        <td id="histogram-box-td-right">
                          {this.state.fiveStarCount}
                        </td>
                      </tr>
                      <tr>
                        <td id="histogram-box-td-left">4 stars</td>
                        <td id="histogram-box-td">
                          <div id="histogram-box">
                            <div
                              id="histogram-box-percentage"
                              style={{
                                width:
                                  this.state.fourStarReviewsPercentage + '%'
                              }}
                            />
                          </div>
                        </td>
                        <td id="histogram-box-td-right">
                          {this.state.fourStarCount}
                        </td>
                      </tr>
                      <tr>
                        <td id="histogram-box-td-left">3 stars</td>
                        <td id="histogram-box-td">
                          <div id="histogram-box">
                            <div
                              id="histogram-box-percentage"
                              style={{
                                width:
                                  this.state.threeStarReviewsPercentage + '%'
                              }}
                            />
                          </div>
                        </td>
                        <td id="histogram-box-td-right">
                          {this.state.threeStarCount}
                        </td>
                      </tr>
                      <tr>
                        <td id="histogram-box-td-left">2 stars</td>
                        <td id="histogram-box-td">
                          <div id="histogram-box">
                            <div
                              id="histogram-box-percentage"
                              style={{
                                width: this.state.twoStarReviewsPercentage + '%'
                              }}
                            />
                          </div>
                        </td>
                        <td id="histogram-box-td-right">
                          {this.state.twoStarCount}
                        </td>
                      </tr>
                      <tr>
                        <td id="histogram-box-td-left">1 stars</td>
                        <td id="histogram-box-td">
                          <div id="histogram-box">
                            <div
                              id="histogram-box-percentage"
                              style={{
                                width: this.state.oneStarReviewsPercentage + '%'
                              }}
                            />
                          </div>
                        </td>
                        <td id="histogram-box-td-right">
                          {this.state.oneStarCount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="big-stars-container">
                  <div id="medium-stars-container">
                    <div id="stars-container">
                      <Ratings
                        rating={this.state.starAverage}
                        widgetRatedColors="black"
                        widgetSpacings="0px"
                      >
                        <Ratings.Widget
                          widgetDimension="24px"
                          svgIconViewBox="0 0 32 32"
                          svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                        />
                        <Ratings.Widget
                          widgetDimension="24px"
                          svgIconViewBox="0 0 32 32"
                          svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                        />
                        <Ratings.Widget
                          widgetDimension="24px"
                          svgIconViewBox="0 0 32 32"
                          svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                        />
                        <Ratings.Widget
                          widgetDimension="24px"
                          svgIconViewBox="0 0 32 32"
                          svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                        />
                        <Ratings.Widget
                          widgetDimension="24px"
                          svgIconViewBox="0 0 32 32"
                          svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                        />
                      </Ratings>{' '}
                      <br />
                      <div id="star-average">
                        {this.state.starAverage} / 5 stars
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FilterBar updateFilter={this.updateFilter}/>
          </div>
            {this.state.renderedArr.map((review, key) => (
              <Review review={review} key={key} />
            ))}
          <div id="show-more-reviews">
            <button id="show-more-reviews-btn" onClick={this.updateIndex}>
              Show 6 more reviews
              <svg viewBox="0 0 95 57" id="show-more-reviews-svg">
                <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="review-top-divider"></div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
