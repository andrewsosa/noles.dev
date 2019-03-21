import React from "react";

import "../../styles/bulma.scss";
import styles from "./Button.module.scss";

const Button = props => {
  return (
    <a href={props.href} className={styles.btn} style={props.style}>
      {props.children}
    </a>
  );
};

export default Button;
