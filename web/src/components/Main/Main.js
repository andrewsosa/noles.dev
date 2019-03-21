import React, { Component } from "react";
import axios from "axios";

import Grid from "../Grid";
import Profile from "../Profile";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["andrewsosa", "glfmn", "marlanmct", "manterolat"],
      userdata: [],
    };
  }

  componentDidMount() {
    const githubUrl = username => `https://api.github.com/users/${username}`;
    const fetch = url => axios.get(url);

    const urls = this.state.users.map(name => githubUrl(name));

    Promise.all(urls.map(url => fetch(url))).then(res =>
      this.setState({ userdata: res.map(resp => resp.data) }),
    );
  }

  render() {
    const { userdata } = this.state;
    return (
      <div className="graphik">
        <Grid>
          {userdata.map(user => (
            <Profile key={user.id} user={user} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Main;
