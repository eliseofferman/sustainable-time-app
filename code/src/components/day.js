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
  }

  render() {
    console.log(this.props.number)
    return (
      <div className={this.state.isActive ? "active" : "not-active"}
        onClick={this.handleClick}>
        {this.props.time}
      </div>
    )
  }
}



export default Day
