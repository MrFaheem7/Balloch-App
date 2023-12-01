import React from "react";
import classes from "./Footer.module.scss";
import footerLogo from "../../../assets/jpeg/headerlogo.jpeg";
import googlePlay from "../../../assets/png/googleplay.png";
import appStore from "../../../assets/png/appstore.png";
const Footer = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.container}>
        <div className={classes.col1}>
          <img src={footerLogo} alt="footerlogo" />
        </div>
        <div className={classes.col3}>
          <span>QuickLinks</span>
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
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
