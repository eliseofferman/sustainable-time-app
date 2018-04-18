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
  }

  render() {
    return (
      <div className={this.state.isActive ? "active" : "not-active"}
        onClick={this.handleClick}>
      </div>
    )
  }
}



export default Day
