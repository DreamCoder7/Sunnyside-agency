import React from "react";
import Service from "./Service/Service";
import classes from "./Services.module.css";

const Services = (props) => (
  <aside className={classes.Service}>
    <Service>
      <div className={classes.ServiceImg1}>
        <h2
          className={classes.ServiceHeading}
          style={{ color: "hsl(167, 40%, 24%)" }}
        >
          Graphic Design
        </h2>
        <p
          className={classes.ServiceParagraph}
          style={{ color: "hsl(167, 40%, 24%)" }}
        >
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention.
        </p>
      </div>
    </Service>

    <Service>
      <div className={classes.ServiceImg2}>
        <h2
          className={classes.ServiceHeading}
          style={{ color: "hsl(198, 62%, 26%)" }}
        >
          Photography
        </h2>
        <p
          className={classes.ServiceParagraph}
          style={{ color: "hsl(198, 62%, 26%)" }}
        >
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </Service>
  </aside>
);

export default Services;
