import React, { Component } from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import Modal from "../UI/Modal/Modal";
import Hamburger from "../UI/Hamburger/Hamburger";
import BackDrop from "../UI/BackDrop/BackDrop";

class Navigation extends Component {
  state = {
    showModal: false,
  };

  navToggle = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <nav className={classes.Navigation}>
        <Logo />
        <Hamburger clicked={this.navToggle} />
        <Modal show={this.state.showModal} />
        <BackDrop clicked={this.navToggle} show={this.state.showModal} />
        <NavigationItems />
      </nav>
    );
  }
}

export default Navigation;
