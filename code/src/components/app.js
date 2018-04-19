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


printTime = (activityMinutes, index) => {
  const testActivities = this.state.activities
  this.state.activities[0].days[index] = activityMinutes
  const testActivitiesDay = this.state.activities[0].days[0]

console.log("Helll", testActivitiesDay);
  // this.state.activities[4].days[0] = activityMinutes


  // console.log("Elise", this.state.activities[0].days[0])
  this.setState({

  })
}


  addToCalendar = (activity) => {
    const allActivities = this.state.activities
    allActivities.push({ id: Date.now(), title: activity, days: [22, 0, 0, 0, 0, 0, 0] })

    localStorage.setItem("saveActivities", JSON.stringify(allActivities))

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
          <TableRow activityname={listActivity.title} days={listActivity.days} callbackTime={this.printTime}/>
        )}

      </div>
    )
  }
}

export default App

// state = {
//   activities: [{
//     id: 1,
//     title: "Facebook",
//     days: [2, 0, 0, 0, 0, 0, 0]
//   },{
//     id: 2,
//     title: "Instagram",
//     days: [0, 0, 0, 0, 0, 0, 0]
//   }]
