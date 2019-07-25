import React, { Component } from "react";
import axios from "axios";

class ConfirmJoin extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined };
  }

  componentDidMount() {
    const { token } = this.props.location.query;
    this.setState({ token });
  }

  loadUserData(hash) {
    const url = `/api/auth/token?hash?${hash}`;
    axios
      .get(url)
      .then(res => res.data)
      .then(token => this.setState({ token }));
  }

  render() {
    return <div>{this.state.token}</div>;
  }
}

export default ConfirmJoin;
