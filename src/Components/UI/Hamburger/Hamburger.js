import React from "react";
import humburgerIcon from "../../../assets/Images/icon-hamburger.svg";
import classes from "./Hamburger.module.css";

const hamburger = (props) => (
  <button onClick={props.clicked} className={classes.Hamburger}>
    <img src={humburgerIcon} alt="Hamburger Icon" />
  </button>
);

export default hamburger;
