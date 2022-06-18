import React from "react";
import TestimonialContent from "./TestimonialContent/TestimonialContent";
import TestimonialImg from "./TestimonialImg/TestimonialImg";
import userImg1 from "../../../assets/Images/image-emily.jpg";
import userImg2 from "../../../assets/Images/image-jennie.jpg";
import userImg3 from "../../../assets/Images/image-thomas.jpg";
import classes from "./Testimonial.module.css";

const testimonial = (props) => (
  <div className={classes.TestimonialCont}>
    <div className={classes.Testimonial}>
      <TestimonialImg img={userImg1} text="User 1" />
      <TestimonialContent>
        <p className={classes.TestimonialParagraph}>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <div className={classes.TestimonialUser}>
          <h4 className={classes.TestimonialHeading}>Emily R.</h4>
          <p className={classes.TestimonialUserInfo}>Marketing Director</p>
        </div>
      </TestimonialContent>
    </div>
    <div className={classes.Testimonial}>
      <TestimonialImg img={userImg3} text="User 2" />
      <TestimonialContent>
        <p className={classes.TestimonialParagraph}>
          Sunnyside's enthusiasm coupled with their keen interest in our brand's
          success made it a satisfying and enjoyable experience.
        </p>
        <div className={classes.TestimonialUser}>
          <h4 className={classes.TestimonialHeading}>Thomas S.</h4>
          <p className={classes.TestimonialUserInfo}>Chief Operating Officer</p>
        </div>
      </TestimonialContent>
    </div>
    <div className={classes.Testimonial}>
      <TestimonialImg img={userImg2} text="User 3" />
      <TestimonialContent>
        <p className={classes.TestimonialParagraph}>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <div>
          <h4 className={classes.TestimonialHeading}>Jennie F.</h4>
          <p className={classes.TestimonialUserInfo}>Business Owner</p>
        </div>
      </TestimonialContent>
    </div>
  </div>
);

export default testimonial;
