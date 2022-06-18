import React from "react";
import Logo from "../Logo/Logo";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import SocialLinks from "./SocialLinks/SocialLinks";
import classes from "./Footer.module.css";

const footer = () => (
  <footer className={classes.Footer}>
    <Logo center={classes.FooterLogo} />
    <ul className={classes.FooterLinks}>
      <NavigationItem link="/">About</NavigationItem>
      <NavigationItem link="/">Service</NavigationItem>
      <NavigationItem link="/">Projects</NavigationItem>
    </ul>
    <SocialLinks />
  </footer>
);

export default footer;
