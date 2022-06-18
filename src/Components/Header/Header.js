import React from "react";
import arrowIcon from "../../assets/Images/icon-arrow-down.svg";
import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const header = () => (
  <header className={classes.Header}>
    <Navigation />
    <div className={classes.HeaderContent}>
      <h1 className={classes.PrimaryHeading}>WE ARE CREATIVES</h1>
      <img
        src={arrowIcon}
        alt="down-arrow Icon"
        className={classes.HeaderIcon}
      />
    </div>
  </header>
);

export default header;
