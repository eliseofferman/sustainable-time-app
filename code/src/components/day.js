import React from "react"
import "./day.css"

class Day extends React.Component{
  state = {
    isActive: false
  }

  handleClick = () => {

    this.setState({
      isActive: !this.state.isActive
    })
   const time = prompt("add your time")
   this.props.callbackTimeTable(time, this.props.index)
  }

  render() {
    console.log(this.props.index)

    return (
      <div className={this.state.isActive ? "active" : "not-active"}
        onClick={this.handleClick}>
        {this.props.time}
      </div>
    )
  }
}



export default Day
