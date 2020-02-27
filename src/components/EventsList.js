import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventsList extends Component {
  render() {
    return (
      <div>
        <li key={this.props.events.id}>
          <Link to={`/events/${this.props.events.id}`}>
            {this.props.events.name}
          </Link>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(EventsList);
