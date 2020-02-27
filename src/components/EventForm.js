import React, { Component } from "react";

class EventForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="NAME"
            value={this.props.values.name}
            onChange={this.props.onChange}
          ></input>
          <input
            type="text"
            placeholder="DATE"
            value={this.props.values.date}
            onChange={this.props.onChange}
          ></input>
          <input
            type="text"
            placeholder="DESCRIPTION"
            value={this.props.values.description}
            onChange={this.props.onChange}
          ></input>
          <button type="submit" onSubmit={this.props.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EventForm;
