import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
// import Home from "./components/Home";
import EventsListContainer from "./components/EventsListContainer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
