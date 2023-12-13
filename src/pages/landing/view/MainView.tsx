import React from "react";
import classes from "./MainView.module.scss";
import { ICard } from "../../../models/ICard";
const MainView = ({ content }: ICard) => {
  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <div className={classes.content}>
          {content?.map((item: any, index: any) => {
            return (
              <>
                {item.heading === "Welcome to BallochParkGuide" && (
                  <h3>{item.heading}</h3>
                )}
                {(item.heading === "Welcome to BallochParkGuide" ||
                  item.heading === "section1 Desc 2" ||
                  item.heading === "section1 Desc 3") && (
                    <div className={classes.description}>
                      <span>{item.text}</span>
                    </div>
                  )}
              </>


            );
          })}

          <div className={classes.buttons}>
            <button className={classes.btn1}>Download App Now </button>
            <button className={classes.btn2}>Learn More </button>
          </div>
        </div>
      </div>

    </div>
  );
};
export default MainView