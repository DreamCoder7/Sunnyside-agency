import React from "react";
import Logo from "../../assets/Images/logo.svg";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={[classes.Logo, props.center]}>
    <img src={Logo} alt="Logo" />
  </div>
);
export default logo;
