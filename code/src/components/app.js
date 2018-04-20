import React from "react"
import Activity from "./activity"
import Header from "./header"
import TableRow from "./tablerow"

class App extends React.Component {


  constructor(props) {
    super(props)

  const activityList = JSON.parse(localStorage.getItem("saveActivities"))
   if(activityList) {
     this.state = {activities: activityList}
   } else {
     this.state = {activities: []}
   }
}

componentDidUpdate(){
  localStorage.setItem("saveActivities", JSON.stringify(this.state.activities))
}

printTime = (activityMinutes, indexcolumn, indexrow) => {
  const totalTime = activityMinutes

  const testActivities = this.state.activities
  this.state.activities[indexrow].days[indexcolumn] = activityMinutes
  this.setState({
  activities: testActivities
  })
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

        {this.state.activities.map((listActivity, index) =>
          <TableRow activityname={listActivity.title} days={listActivity.days} callbackTime={this.printTime} index={index}/>
        )}

      </div>
    )
  }
}

export default App
