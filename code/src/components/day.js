import React from "react"
import "./day.css"

class Day extends React.Component {

  renderTime = time => {
    if (time === 0) {
      return "+"
    } else if (time < 60) {
      return (`${time} min`)
    } else {
      const hours = Math.floor(time / 60)
      time = time - (hours * 60)
      return (`${hours}h, ${time}min`)
    }
  }

  handleClick = () => {
    let userInputTime = prompt("Add your time in minutes")
    if (!(userInputTime >= 0)) {
      userInputTime = prompt(`Sorry, "${userInputTime}" is not a correct number, please add your time in minutes`)
      if (userInputTime >= 0) {
        this.props.callbackRenderTime(userInputTime, this.props.indexcolumn, this.props.indexrow)
      }
    } else if (userInputTime == null) {
      return null
    } else {
      this.props.callbackRenderTime(userInputTime, this.props.indexcolumn, this.props.indexrow)
    }
  }

  render() {
    return (
      <div className={this.props.time ? "active" : "not-active"}
        onClick={this.handleClick}>
        {this.renderTime(this.props.time)}
      </div>
    )
  }
}

export default Day
