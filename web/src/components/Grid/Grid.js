import React from "react";
import { grid } from "./Grid.module.scss";

const Grid = ({ children }) => {
  return <div className={grid}>{children}</div>;
};

export default Grid;
