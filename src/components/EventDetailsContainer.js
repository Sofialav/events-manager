import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, deleteEvent, updateEvent } from "../actions/events";
import EventForm from "./EventForm";

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    formValues: {}
  };
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }
  onDelete = event => {
    event.preventDefault();
    this.props.deleteEvent(this.props.event.id);
    this.props.history.push("/");
  };
  onUpdate = e => {
    e.preventDefault();
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    });
  };
  onChange = event => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.updateEvent(this.props.event.id, this.state.formValues);
  };

  render() {
    if (!this.props.event) {
      return <div>Loading...</div>;
    }
    if (this.state.editMode === true) {
      return (
        <EventForm
          values={this.state.formValues}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      );
    }
    return (
      <EventDetails
        event={this.props.event}
        delete={this.onDelete}
        update={this.onUpdate}
        toggle={this.state.editMode}
      />
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps, {
  loadEvent,
  deleteEvent,
  updateEvent
})(EventDetailsContainer);
