import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a className={classes.NavigationItemLink} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
