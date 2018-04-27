import React from "react"
import "./input.css"

class Input extends React.Component {
  state = {
    newActivity: ""
  }

  handleOnChange = event => {
    this.setState({
      newActivity: event.target.value
    })
  }

  handleOnSubmit = event => {
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
          <div className="activity-wrapper">
            <label>
              <input
                type="text"
                name="activity"
                placeholder="Type activity here"
                value={this.state.newActivity}
                onChange={this.handleOnChange} />
            </label>
            <button className="activity-button">
              Click to submit activity
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Input

//
// onSubmit={this.handleOnSubmit}
