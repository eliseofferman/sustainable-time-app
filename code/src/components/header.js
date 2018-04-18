import React from "react"
import "./header.css"

class Header extends React.Component{
  render() {
    return (
      <div className="header">
        <h1>Welcome to the ReactTimeApp</h1>
        <p>With this app you are able to track the time you spend on the activities of your choice.</p>
        <ol>
          <li>Define the activity you want to track using the "Add Activity" field below.</li>
          <li>Submit the time (minutes) you are dedicating to that activity.</li>
          <li>And what else???</li>
        </ol>
      </div>
    )
  }
}

export default Header
