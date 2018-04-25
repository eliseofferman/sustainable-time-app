import React from "react"
import "./header.css"

class Header extends React.Component{
  render() {
    return (
      <div className="header">
        <div className="header-image-container">
          <img className="header-image" src= { require('./images/time.jpg') }  />
        </div>
        <h1>The Kivra time app</h1>
        <p>With this app you are able to track the time you spend on the activities of your choice.</p>
        <div>
          <p>1. Define the activity you want to track using the "Add Activity" field below.</p>
          <p>2. Submit the time (minutes) you are dedicating to that activity.</p>
        </div>
      </div>
    )
  }
}

export default Header
