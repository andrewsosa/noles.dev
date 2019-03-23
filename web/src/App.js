import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "tachyons/css/tachyons.css";
import "./styles/globals.scss";
import "./styles/index.scss";

import Main from "./pages/Main";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
