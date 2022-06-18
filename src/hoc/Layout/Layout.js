import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Header from "../../Components/Header/Header";
import classes from "./Layout.module.css";
import Footer from "../../Components/Footer/Footer";

const layout = (props) => (
  <Auxiliary>
    <Header />
    <main className={classes.Main}>{props.children}</main>
    <Footer />
  </Auxiliary>
);

export default layout;
