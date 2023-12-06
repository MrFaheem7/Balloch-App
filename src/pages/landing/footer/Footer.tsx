import React from "react";
import classes from "./Footer.module.scss";
import footerLogo from "../../../assets/jpeg/headerlogo.jpeg";
import googlePlay from "../../../assets/png/googleplay.png";
import appStore from "../../../assets/png/appstore.png";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.container}>
        <div className={classes.col1}>
          <img src={footerLogo} alt="footerlogo" />
        </div>
        <div className={classes.col3}>
          <span>QuickLinks</span>
          <NavLink className={classes.navlink} to='/termandcondition'><p>Term and Conditions</p></NavLink>
          <NavLink className={classes.navlink} to='/privacypolicy'> <p>Privacy Policy</p></NavLink>
          <a href="/#contact" className={classes.navlink}><p>Contact Us</p></a>
        </div>
        <div className={classes.col3}>
          <img src={googlePlay} alt="googleplaylogo" />
          <img src={appStore} alt="appstorelogo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
