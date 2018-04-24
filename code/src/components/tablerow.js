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

        <div className="week">
          {this.props.days.map(( day, index) =>
            <Day time={day} callbackTimeTable={this.props.callbackTime} indexcolumn={index} indexrow={this.props.index} />) }
        </div>

        <div className="activityDetails">

          <h4>{this.props.activityname}</h4>

            <h4>
            {this.renderTotalActivityTime()}
            </h4>
            <div className="removeButton"onClick={this.deleteRow}>
              <button>🗑️</button>
              </div>
        </div>

      </div>
    )
  }

}

export default TableRow
