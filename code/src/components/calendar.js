import React from "react"
import "./calendar.css"

class Calendar extends React.Component {


  render() {

    return (
      <div className="calendar">
        <div className="select-week"> ⇦ Previous week Next week ⇨</div>
          <div className="daybox">M</div>
          <div className="daybox">T</div>
          <div className="daybox">W</div>
          <div className="daybox">T</div>
          <div className="daybox">F</div>
          <div className="daybox">S</div>
          <div className="daybox">S</div>

      </div>
    )
  }

}

export default Calendar
