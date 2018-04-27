import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-image-container">
          <img className="header-image" src= { require('./images/time.jpeg') } />
        </div>
        <h2>The Sustainable Time App is a habit and time tracker. </h2>
        <div className="instructions">
          <p>1. Type and submit your activity with the form below.</p>
          <p>2. Choose a day inside of your activity by clicking on it.</p>
          <p>3. Input the time in minutes.</p>
          <p>4. You can always update a box! :D</p>
        </div>
      </div>
    )
  }
}

export default Header
