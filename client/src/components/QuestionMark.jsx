import React from 'react';
import styles from './app.css';

class QuestionMark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'none'

    }
  }

  render() {
    return (
      <div id="question-mark">
      <div id="popup-text-container" style={{display: this.state.display}}>
        <div id="popup-text-container2">
          <div id="popup-text-container3">
            <div>
            A Beauty Match is someone who shares your beauty traits — eye color, hair color, skin tone and type
            </div>    
          </div> 
        </div>
      </div>
      <div id="question-mark-icon-container">
        <svg viewBox="0 0 32 32" aria-hidden="true" id="question-mark-icon" data-comp="IconInfo Icon Box" onMouseEnter={()=> this.setState({display: 'block'})} onMouseLeave={() => this.setState({display: 'none'})}>
          <path d="M15.947 0.107c-8.669 0-15.839 7.171-15.839 15.839s7.064 15.839 15.839 15.839 15.839-7.064 15.839-15.839-7.064-15.839-15.839-15.839zM17.873 25.686h-3.746v-3.746h3.746v3.746zM22.154 14.020c-0.428 0.749-1.498 1.712-2.997 2.997-0.749 0.642-1.284 1.177-1.498 1.605s-0.321 1.070-0.214 2.14h-3.318c0-0.535 0-0.749 0-0.856 0-1.070 0.214-2.033 0.535-2.676 0.321-0.749 1.070-1.498 2.14-2.354s1.712-1.498 1.926-1.712c0.321-0.428 0.535-0.856 0.535-1.391 0-0.749-0.321-1.284-0.856-1.819s-1.391-0.749-2.354-0.749c-0.963 0-1.712 0.214-2.354 0.856-0.642 0.535-1.070 1.391-1.284 2.462l-3.425-0.428c0.107-1.605 0.749-2.89 2.033-3.96s2.89-1.605 4.923-1.605c2.14 0 3.853 0.535 5.030 1.712 1.284 1.070 1.926 2.354 1.926 3.853 0 0.428-0.214 1.284-0.749 1.926z"></path>
        </svg>
      </div>
    </div>
    )
  }
}

export default QuestionMark;