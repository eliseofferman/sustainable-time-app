import React from "react"


class TableRow extends React.Component {

render() {
  return (
    <div>
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


{/* <h1>{this.props.activityname}</h1>
<h2>{this.props.days}</h2> */}
