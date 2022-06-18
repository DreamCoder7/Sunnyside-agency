import React from "react";
import classes from "./TestimonialContent.module.css";

const testimonialContent = (props) => (
  <div className={classes.TestimonialContent}>{props.children}</div>
);

export default testimonialContent;
