import React from "react";
import styles from "./Loader.module.scss";

const Loader = props => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>NOLES.DEV</h1>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default Loader;
