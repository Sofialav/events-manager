import React, { Component } from "react";

class EventForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.props.values.name}
            onChange={this.props.onChange}
          ></input>
          <input
            type="text"
            placeholder="date"
            name="date"
            value={this.props.values.date}
            onChange={this.props.onChange}
          ></input>
          <input
            type="text"
            placeholder="description"
            name="description"
            value={this.props.values.description}
            onChange={this.props.onChange}
          ></input>
          <button type="submit" onClick={this.props.onSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EventForm;
