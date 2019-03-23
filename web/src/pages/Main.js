import React from "react";

import styles from "./Main.module.scss";
import UserGrid from "../components/UserGrid";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";

const Main = () => (
  <div>
    <div className="mw8 ph4 center">
      <NavHeader />
      <div className={styles.main}>
        <UserGrid />
      </div>
    </div>
    <Footer />
  </div>
);

export default Main;
