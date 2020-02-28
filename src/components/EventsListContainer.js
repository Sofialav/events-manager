import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import CreateEventFormContainer from "./CreateEventFormContainer";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    if (!this.props.events) {
      return <div>Loading...</div>;
    }
    const displayEvents = this.props.events.map(event => {
      return <EventsList events={event} key={event.id} />;
    });
    return (
      <div>
        <ul>{displayEvents}</ul>
        <CreateEventFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
