import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.event.name}</h1>
        <i>{this.props.event.date}</i>
        <p>{this.props.event.description}</p>
      </div>
    );
  }
}

export default EventDetails;
