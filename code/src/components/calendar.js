import React from "react"
import "./calendar.css"

class Calendar extends React.Component {

  render() {
    return (
      <div className="calendar">
        <div className="select-week">
          <div className="previous-week"> ⇦ Previous week</div>
          <div className="next-week"> Next week ⇨</div>
        </div>
        <div className="weekdays">
          <div className="daybox">M</div>
          <div className="daybox">T</div>
          <div className="daybox">W</div>
          <div className="daybox">T</div>
          <div className="daybox">F</div>
          <div className="daybox">S</div>
          <div className="daybox last-daybox">S</div>
        </div>
      </div>
    )
  }
}

export default Calendar
