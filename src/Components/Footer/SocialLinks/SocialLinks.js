import React from "react";
import SocialLink from "./SocialLink/SocialLink";
import facebookIcon from "../../../assets/Images/icon-facebook.svg";
import instagramIcon from "../../../assets/Images/icon-instagram.svg";
import twitterIcon from "../../../assets/Images/icon-twitter.svg";
import pinterestIcon from "../../../assets/Images/icon-pinterest.svg";
import classes from "./SocialLinks.module.css";

const socialLinks = () => (
  <div className={classes.SocialLinks}>
    <SocialLink img={facebookIcon} text="Facebook Icon" />
    <SocialLink img={instagramIcon} text="Instagram Icon" />
    <SocialLink img={twitterIcon} text="Twitter Icon" />
    <SocialLink img={pinterestIcon} text="Pinterest Icon" />
  </div>
);

export default socialLinks;
