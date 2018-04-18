import React from "react"
import Activity from "./activity"

class App extends React.Component {
  state = {
    activities: [{
      title: "Facebook",
      days: [0, 0, 0, 0, 0, 0, 0]
    },{
      title: "Instagram",
      days: [0, 0, 0, 0, 0, 0, 0]
    }]
  }

  render() {
    return (
      <div>
      {this.state.activities.map(listActivity =>
        <h1>{listActivity.title}</h1>
      )}
        <p>With TimeApp you can
        </p>
        <div>Define the activity you want to track</div>
        <div>Submit the time (minutes) you are dedicating to that activity</div>
        <div>
          <Activity />
        </div>
      </div>
    )
  }

}

export default App
