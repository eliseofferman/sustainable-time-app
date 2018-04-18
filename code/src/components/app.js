import React from "react"
import Activity from "./activity"
import Header from "./header"
import TableRow from "./tablerow"

class App extends React.Component {
  state = {
    activities: [{
      id: 1,
      title: "Facebook",
      days: [2, 0, 0, 0, 0, 0, 0]
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

        <Header />

        <div className="input-activity">
          <Activity addToActivities={this.addToCalendar}/>
        </div>

        {this.state.activities.map(listActivity =>
          <TableRow activityname={listActivity.title} days={listActivity.days}/>
        )}

      </div>
    )
  }
}

export default App
