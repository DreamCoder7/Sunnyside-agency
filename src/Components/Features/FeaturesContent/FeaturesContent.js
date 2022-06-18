import React from "react";
import classes from "./FeaturesContent.module.css";

const featuresContent = (props) => (
  <div className={classes.FeaturesContent} style={props.spanContent}>
    {props.children}
  </div>
);

export default featuresContent;
