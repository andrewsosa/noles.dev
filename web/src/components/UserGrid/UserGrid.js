import React, { Component } from "react";
import axios from "axios";

import Profile from "../Profile";
import styles from "./UserGrid.module.scss";

export default class UserGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userdata: [],
    };
  }

  componentDidMount() {
    const apiUrl = "http://localhost:3001/api/userdata";
    axios
      .get(apiUrl)
      .then(res => res.data)
      .then(data => this.setState({ userdata: data, isLoaded: true }));
  }

  render() {
    const { userdata, isLoaded } = this.state;
    return (
      <div className="graphik">
        {isLoaded && (
          <div className={styles.grid}>
            {userdata.map(user => (
              <Profile key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
