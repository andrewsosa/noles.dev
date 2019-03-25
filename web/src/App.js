import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "tachyons/css/tachyons.css";
import "./styles/globals.scss";
import "./styles/index.scss";

import Main from "./pages/Main";
import ScrollToTop from "./components/Layout/ScrollToTop";
import DevelopersPage from "./pages/Developers";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="graphik">
            <Route path="/" exact component={Main} />
            <Route path="/developers" component={DevelopersPage} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
