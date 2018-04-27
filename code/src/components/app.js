import React from "react"
import Input from "./input"
import Header from "./header"
import Calendar from "./calendar"
import Activity from "./activity"
import Footer from "./footer"

class App extends React.Component {

  constructor(props) {
    super(props)
    const activityList = JSON.parse(localStorage.getItem("saveActivities"))
    if (activityList) {
      this.state = { activities: activityList }
    } else {
      this.state = { activities: [] }
    }
  }

  componentDidUpdate() {
    localStorage.setItem("saveActivities", JSON.stringify(this.state.activities))
  }

  deleteActivity = index => {
    const act = this.state.activities
    act.splice(index, 1)
    this.setState({ activities: act })
  }

  printTime = (userInputMinutes, indexcolumn, indexrow) => {
    let arraypPositionValue = this.state.activities[indexrow].days[indexcolumn]
    const totalTime = arraypPositionValue + parseInt(userInputMinutes)
    const saveState = this.state.activities
    this.state.activities[indexrow].days[indexcolumn] = totalTime
    this.setState({
      activities: saveState
    })
  }

  addToCalendar = activity => {
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
        <Input addToActivities={this.addToCalendar} />
        <Calendar />
        {this.state.activities.map((listActivity, index) =>
          <Activity
            activityname={listActivity.title}
            days={listActivity.days}
            callbackPrintTime={this.printTime}
            callbackDelete={this.deleteActivity}
            index={index} />)}
        <Footer />
      </div>
    )
  }
}

export default App
