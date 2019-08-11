import React, { Component } from "react";
import axios from "axios";

import styles from "./UserGrid.module.scss";
import Profile from "../Profile";
import Loader from "../Loader";

export default class UserGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      profilesLoaded: false,
      userdata: [],
      loadedNodes: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    const apiUrl = `${process.env.API_PREFIX}/users`;
    const { limit } = this.props;
    axios
      .get(apiUrl)
      .then(res => res.data)
      .then(data => (limit ? data.slice(0, limit) : data))
      .then(data => {
        this.setState({ userdata: data, dataLoaded: true });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      nextState.loadedNodes,
      nextState.profilesLoaded
    );

    // update if the profiles are loaded, or if the # of loaded nodes didn't
    // change between updates. (this will skip the update if the # of loaded nodes
    // DID change during the update )
    return (
      nextState.profilesLoaded ||
      this.state.loadedNodes === nextState.loadedNodes
    );
  }

  onChildLoad(text) {
    console.log("onChildLoad", text);
    const { loadedNodes, userdata } = this.state;
    const profilesLoaded =
      loadedNodes !== 0 && loadedNodes + 1 === userdata.length;
    this.setState({
      profilesLoaded,
      loadedNodes: loadedNodes + 1,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  allChildrenLoaded(state) {
    const result =
      state.loadedNodes !== 0 && state.loadedNodes === state.userdata.length;
    console.log("allChildrenLoaded?", result);
    console.log(state.loadedNodes, state.userdata.length);
    return result;
  }

  render() {
    console.log("RENDER");
    const { userdata, profilesLoaded } = this.state;

    // If the profiles are loaded, pass a dummy onRender
    const onRender = !profilesLoaded ? this.onChildLoad.bind(this) : () => ({});

    return (
      <div className={styles.wrapper}>
        {!profilesLoaded && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
        <div
          className={styles.grid}
          style={{
            opacity: profilesLoaded ? 1 : 0,
          }}
        >
          {userdata.map(user => (
            <Profile key={user.id} user={user} onRender={onRender} />
          ))}
        </div>
      </div>
    );
  }
}
