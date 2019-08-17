import axios from "axios";
import React, { Component } from "react";

import { MainLayout } from "../components/Layout";
import Profile from "../components/Profile";
import Button from "../components/Button";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      complete: false,
    };
    this.confirmUser = this.confirmUser.bind(this);
  }

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search);
    const code = search.get("code");

    axios
      .post(`${process.env.API_PREFIX}/oauth-load-user`, {
        code,
      })
      .then(res => res.data)
      .then(user => this.setState({ user }));
  }

  confirmUser() {
    const { confirmToken: token } = this.state.user;
    axios
      .post(`${process.env.API_PREFIX}/oauth-confirm-user`, {
        token,
      })
      .then(res => {
        if (res.status === 200) this.setState({ complete: true });
      });
  }

  render() {
    const { user, complete } = this.state;

    if (complete)
      // eslint-disable-next-line no-return-assign
      return (
        <div>
          <script>
            function redirect() {(window.location = `/`)}; redirect();
          </script>
        </div>
      );

    return (
      <MainLayout>
        <div className="mw8 center pa2">
          <h1 className="tc f3 f2-ns fw7">Is this you?</h1>
          <div className="mw5 center mt5 mb4">
            <Profile key={user.id} user={user} onRender={() => {}} />
          </div>
          <div className="mw5 center mb5">
            <Button
              href={"#"}
              style={{
                backgroundColor: "var(--gray)",
              }}
              onClick={this.confirmUser}
            >
              <span>Yep, sign me up.</span>
              <span className="ph2">→</span>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default SignUp;
