import React from "react"
import Day from "./day"
import "./tablerow.css"

class TableRow extends React.Component {
 renderTotalActivityTime = () => {
   const numbers = this.props.days
   let sum = 0
   for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i]
   }

   if (sum < 60) {
     return (`${sum} min`)
   } else {
     const hours = Math.floor(sum / 60)
     sum = sum - (hours * 60)
     return (`${hours}h, ${sum}min`)
   }
 }

  deleteRow = () => {
    this.props.callbackDelete(this.props.index)
  }

  render() {

    return (
      <div className="tablerow">
        <h1>{this.props.activityname}</h1>
        <div className="week">
          {this.props.days.map(( day, index) =>
            <Day time={day} callbackTimeTable={this.props.callbackTime} indexcolumn={index} indexrow={this.props.index} />) }
        </div>
        <div className="removeButton" onClick={this.deleteRow}>
          <button>Remove Activity</button>
          {this.renderTotalActivityTime()}
        </div>

      </div>
    )
  }

}

export default TableRow
