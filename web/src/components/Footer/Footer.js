import React from "react";

import { NavMenu } from "../NavHeader/NavHeader";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`mw8 ph4 pv5 center flex mono`}>
        <div className="center">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Footer;
