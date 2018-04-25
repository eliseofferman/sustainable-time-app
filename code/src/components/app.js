import React from "react"
import Activity from "./activity"
import Header from "./header"
import Calendar from "./calendar"
import TableRow from "./tablerow"
import Footer from "./footer"

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

  deleteActivity = (index) => {
    const act = this.state.activities
    act.splice(index, 1)
    this.setState({ activities: act })
  }



  printTime = (activityMinutes, indexcolumn, indexrow) => {



    let totalTime = this.state.activities[indexrow].days[indexcolumn] + parseInt(activityMinutes)
    const testActivities = this.state.activities
    this.state.activities[indexrow].days[indexcolumn] = totalTime
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
        <Calendar />
        {this.state.activities.map((listActivity, index) =>
          <TableRow activityname={listActivity.title} days={listActivity.days} callbackTime={this.printTime} callbackDelete={this.deleteActivity} index={index}/>
        )}
        <Footer />
      </div>
    )
  }
}

export default App
