import React from "react";
import Header from "./header/header";
import MainView from "./view/MainView";
import Section from "./section/Section";
import Footer from "./footer/Footer";
import classes from "../style.module.scss";
import arrow from "../../assets/png/arrow.svg";
import HowitWorks from "./section/HowitWorks";
import Card from "../../components/common/Card/Card";
import Button from "../../components/button/button";
import ContactUs from "./contact/ContactUs";

const MainPage = () => {
  let mybutton = document.getElementById("btn-back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton) {
        mybutton.style.display = "block";
      }
    } else {
      if (mybutton) {
        mybutton.style.display = "none";
      }
    }
  };
  const scrollButton = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <MainView />
      <Section />
      <Button />
      <HowitWorks />
      <ContactUs />
      <footer>
        <Footer />
      </footer>
      <button
        onClick={scrollButton}
        type="button"
        className={classes.btn}
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default MainPage;
