import React from "react";
import Header from "../header/header";
import classes from "./MainView.module.scss";
const MainView = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.content}>
          <h3> Welcome To BallochParkGuide</h3>
          <div className={classes.description}>
            <span>
              Your ultimate companion for exploring the breathtaking landscapes
              and hidden wonders of Balloch Castle Country Park, Loch Lomond.
            </span>
          </div>
          <div className={classes.description}>
            <span>
              This feature-rich mobile app is specifically designed to enhance
              your experience and help you navigate the vast expanse of the park
              with ease.{" "}
            </span>
          </div>
          <div className={classes.buttons}>
            <button className={classes.btn1}>Download App Now </button>
            <button className={classes.btn2}>Learn More </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MainView;
