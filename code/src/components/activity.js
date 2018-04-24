import React from "react"
import "./activity.css"

class Activity extends React.Component {
  state = {
    newActivity: ""
  }

  handleOnChange = (event) => {
    this.setState ({
      newActivity: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addToActivities(this.state.newActivity)
    this.setState({
      newActivity: ""
    })
  }

  render() {
    return (
      <div className="activity">
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <input
              type="text"
              name="activity"
              placeholder="Add activity here"
              value={this.state.newActivity}
              onChange={this.handleOnChange}
            />
          </label>
          <button className="activity-button">
            <span className="button-text">
              +
            </span>
          </button>
        </form>
      </div>
    )
  }
}

export default Activity

//
// onSubmit={this.handleOnSubmit}
