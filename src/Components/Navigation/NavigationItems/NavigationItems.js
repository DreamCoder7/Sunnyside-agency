import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">About</NavigationItem>
    <NavigationItem link="/">Services</NavigationItem>
    <NavigationItem link="/">Projects</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
