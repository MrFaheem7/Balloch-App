import React from "react";
import Header from "../header/header";
import classes from "./MainView.module.scss";
import { ICard } from "../../../models/ICard";
const MainView = ({ content }: ICard) => {
  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <div className={classes.content}>
          {content?.map((item: any, index: any) => {
            if (index == 0 || index == 9 || index == 10) {
              return <>
                {index == 0 && <h3>{item.heading}</h3>}
                <div className={classes.description}>
                  <span>
                    {item.text}
                  </span>
                </div>
              </>
            }
            else
              return null;
          })
          }


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
