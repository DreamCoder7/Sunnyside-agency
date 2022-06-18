import React from "react";
import classes from "./TestimonialImg.module.css";

const testimonialImg = (props) => (
  <img className={classes.TestimonialImg} src={props.img} alt={props.text} />
);

export default testimonialImg;
