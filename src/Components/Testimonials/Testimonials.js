import React from "react";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.css";

const testimonials = () => (
  <div className={classes.Testimonials}>
    <h3 className={classes.TestimonialsHeading}>Client Testimonials</h3>
    <Testimonial />
  </div>
);

export default testimonials;
