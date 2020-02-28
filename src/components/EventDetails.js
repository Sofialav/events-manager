import React, { Component } from "react";
// import EventForm from "./EventForm";

class EventDetails extends Component {
  render() {
    // if (this.props.toggle === true) {
    //   console.log("toggle!");
    //   return <EventForm values={{}} />;
    // }
    return (
      <div>
        <h1>{this.props.event.name}</h1>
        <i>{this.props.event.date}</i>
        <p>{this.props.event.description}</p>
        <button onClick={this.props.delete}>Delete event</button>
        <button onClick={this.props.update}>Edit event</button>
      </div>
    );
  }
}

export default EventDetails;
