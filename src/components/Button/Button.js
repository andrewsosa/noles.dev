import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text, color }) => {
  color = color || "#000";
  return (
    <span
      className={styles.btn}
      style={{
        backgroundColor: color,
      }}
    >
      <span className={styles.btnText}>{text}</span>
      <span className={styles.btnArrow}>→</span>
    </span>
  );
};

export default Button;
