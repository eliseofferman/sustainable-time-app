import React from "react"
import "./day.css"

class Day extends React.Component{

  handleClick = () => {
   const time = prompt("add your time")
   this.props.callbackTimeTable(time, this.props.indexcolumn, this.props.indexrow)
  }

  render() {
    return (
      <div className={this.props.time ? "active" : "not-active"}
        onClick={this.handleClick}>
        {this.props.time}
      </div>
    )
  }
}



export default Day
