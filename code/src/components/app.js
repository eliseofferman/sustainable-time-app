import React from "react"
import Activity from "./activity"

class App extends React.Component {
  state = {
    activities: [{
      id: 1,
      title: "Facebook",
      days: [0, 5, 0, 0, 0, 0, 0]
    },{
      id: 2,
      title: "Instagram",
      days: [0, 0, 0, 0, 0, 0, 0]
    }]
  }

  addToCalendar = (activity) => {
    const allActivities = this.state.activities
    allActivities.push({ id: Date.now(), title: activity, days: [0, 0, 0, 0, 0, 0, 0] })
    this.setState({
      activities: allActivities
    })
  }

  render() {
    return (
      <div>
      {this.state.activities.map(listActivity =>
        <div>
          <h1>{listActivity.title}</h1>
          <h2>{listActivity.days}</h2>
        </div>
      )}
        <p>With TimeApp you can
        </p>
        <div>Define the activity you want to track</div>
        <div>Submit the time (minutes) you are dedicating to that activity</div>
        <div>
          <Activity addToActivities={this.addToCalendar}/>
        </div>
      </div>
    )
  }

}

export default App
