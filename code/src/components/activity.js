import React from "react"

class Activity extends React.Component {
  state = {
    newActivity: ""
  }

  handleOnChange = (event) => {
    this.setState ({
      newActivity: event.target.value
    })
  }

  // handleOnSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.addToCalendar(this.state.newActivity)
  //   this.setState({
  //     newActivity: ""
  //   })
  // }

  render() {
    return (
      <div>
        <form>
          <label>
            <input
              type="text"
              name="activity"
              value={this.state.newActivity}
              onChange={this.handleOnChange}
            />
          </label>
          <button>Add Activity</button>
        </form>
      </div>
    )
  }
}

export default Activity

//
// onSubmit={this.handleOnSubmit}
