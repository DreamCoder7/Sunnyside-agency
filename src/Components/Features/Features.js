import React from "react";
import FeaturesContent from "./FeaturesContent/FeaturesContent";
import FeaturesImg from "./FaturesImg/FaturesImg";
import classes from "./Features.module.css";

const features = () => (
  <div className={classes.Features}>
    <FeaturesImg>
      <div className={classes.FeatureImg1}></div>
    </FeaturesImg>
    <FeaturesContent spanContent={{ gridRow: "1" }}>
      <h2 className={classes.FeatureHeading}>Transform your brand</h2>
      <p className={classes.FeatureParagraph}>
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <a className={classes.FeatureLink} href="/">
        LEARN MORE
      </a>
    </FeaturesContent>

    <FeaturesImg>
      <div className={classes.FeatureImg2}></div>
    </FeaturesImg>
    <FeaturesContent>
      <h2 className={classes.FeatureHeading}>
        Stand out to the right audience
      </h2>
      <p className={classes.FeatureParagraph}>
        Using a collaborative formula of designers, researchers, photographers,
        videographers,and copywriters, we'll build and extend your brand in
        digital places.
      </p>
      <a
        className={[classes.FeatureLink, classes.FeatureLink2].join(" ")}
        href="/"
      >
        LEARN MORE
      </a>
    </FeaturesContent>
  </div>
);

export default features;
