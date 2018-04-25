import React from "react"
import "./day.css"

class Day extends React.Component {

  renderTime = time => {
    if (time < 60) {
      return (`${time} min`)
    } else {
      const hours = Math.floor(time / 60)
      time = time - (hours * 60)
      return (`${hours}h, ${time}min`)
    }
  }

  handleClick = () => {
    let time = prompt("Add your time in minutes")
      if (time == null) {
        console.log("null", time)
        time = 0
      } else if (time >= 0) {
        console.log("correct number", time)
      } else {
        console.log("not a vaid number", time)
        time = prompt(`Sorry, "${time}" is not a correct number, please add your time in minutes`)
      }

    this.props.callbackTimeTable(time, this.props.indexcolumn, this.props.indexrow)
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
