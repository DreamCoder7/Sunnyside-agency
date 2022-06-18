import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Features from "../../Components/Features/Features";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Gallery from "../../Components/Gallery/Gallery";

class Main extends Component {
  render() {
    return (
      <Auxiliary>
        <Features />
        <Services />
        <Testimonials />
        <Gallery />
      </Auxiliary>
    );
  }
}

export default Main;
