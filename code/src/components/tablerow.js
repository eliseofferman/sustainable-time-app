import React from "react"
import Day from "./day"
import "./tablerow.css"

class TableRow extends React.Component {

  deleteRow = () => {
    this.props.callbackDelete(this.props.index)
  }

  render() {

    return (
      <div className="tablerow">
        <h1>{this.props.activityname}</h1>
        <div className="week">
          {this.props.days.map( (day, index) =>

            // console.log("day", day)
              <Day time={day} callbackTimeTable={this.props.callbackTime} indexcolumn={index} indexrow={this.props.index}/>
          )}
        </div>
        <div className="removeButton"onClick={this.deleteRow}>
          <button>Remove Activity</button>
        </div>

      </div>
    )
  }

}

export default TableRow


{/*
<h2>{this.props.days}</h2> */}
