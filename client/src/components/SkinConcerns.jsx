import React from 'react'
import styles from './app.css';

class SkinConcerns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName : props.name,
      display: 'none'

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.display === 'none'){
      this.setState({display: 'block'}, () => {
        this.props.addFilter('skinConcerns', this.state.filterName)
      })
    } else {
      this.setState({display: 'none'} , () => {
        this.props.deleteFilter('skinConcerns', this.state.filterName)
      })
    }

  }
  render() {
    return (
      <div id="filter-item" >
        <div>
          <label id="filter-item-label">
            <input id="filter-item-input" type="checkbox" value={"" + this.state.filterName + ""}></input>
            <div id="filter-item-checkbox" onClick={this.handleClick}>
              <svg viewBox="0 0 32 32" id={(this.state.filterName === 'Aging' || this.state.filterName === 'Calluses' || this.state.filterName === 'Cellulite' || this.state.filterName === 'Cuticles' || this.state.filterName === 'Dullness' || this.state.filterName === 'Redness') ? "filter-item-checkbox-svg2" : (this.state.filterName === "Blackheads" || this.state.filterName === 'Dark Circles' || this.state.filterName === 'Sensitivity' || this.state.filterName === 'Stretch Marks' || this.state.filterName === 'Sun Damage') ? "filter-item-checkbox-svg3" : "filter-item-checkbox-svg"}  style={{display: this.state.display}}>
                <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
              </svg>
              <div id="checkbox-box" onClick={this.handleClick}></div>
            </div>
            <div id="filter-item-label" onClick={this.handleClick}>{this.state.filterName}</div>
          </label>
        </div>
      </div>
    )
  }
}

export default SkinConcerns;