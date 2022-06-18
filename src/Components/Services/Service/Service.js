import React from "react";
import classes from "./Service.module.css";

const service = (props) => (
  <div className={classes.Service}>{props.children}</div>
);

export default service;
