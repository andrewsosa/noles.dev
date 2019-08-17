import React from "react";

import { NavMenu } from "../Navbar/Navbar";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.buffer} />
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <div className="mw8 ph4 pv5 center flex mono">
            <div className="center">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
