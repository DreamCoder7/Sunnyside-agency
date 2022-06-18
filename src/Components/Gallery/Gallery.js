import React from "react";
import classes from "./Gallery.module.css";

const gallery = () => (
  <article className={classes.Gallery}>
    <div className={classes.GalleryImg1}></div>
    <div className={classes.GalleryImg2}></div>
    <div className={classes.GalleryImg3}></div>
    <div className={classes.GalleryImg4}></div>
  </article>
);

export default gallery;
