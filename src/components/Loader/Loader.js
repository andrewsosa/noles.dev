import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({ message }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>{message}</h1>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default Loader;
