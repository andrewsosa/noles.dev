import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "tachyons/css/tachyons.css";
import "./styles/reset.css";
import "./styles/globals.css";

import Main from "./components/Main";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
