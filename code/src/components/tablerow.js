import React from "react"
import "./tablerow.css"


class TableRow extends React.Component {

render() {
  return (
    <div>
      <h1>{this.props.activityname}</h1>
      <div className="week">
        {this.props.days.map( week =>

          <div className="day"></div>
        )}
      </div>

    </div>
  )
}

}

export default TableRow


{/*
<h2>{this.props.days}</h2> */}
