import React from "react";
import classes from "./Modal.module.css";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

const modal = (props) =>
  props.show ? (
    <div className={classes.Modal}>
      <NavigationItems />
    </div>
  ) : null;

export default modal;
