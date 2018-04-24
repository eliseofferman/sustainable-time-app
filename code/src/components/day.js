import React from "react"
import "./day.css"

class Day extends React.Component {

  renderTime = (time) => {
   if(time < 60){
     return ( `${time} min` )
   } else {
     var hours = Math.floor(time/60)
     time = time - (hours*60)
     return (`${hours}h, ${time}min`)
   }
 }

  handleClick = () => {
   const time = prompt("add your time in minutes")
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
