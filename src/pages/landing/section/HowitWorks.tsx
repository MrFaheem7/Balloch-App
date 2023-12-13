import React from "react";
import classes from "./Howitworks.module.scss";

const HowitWorks = ({ content }: any) => {
  return (
    <div className={classes.maincontainer}>
      {content?.map((item: any) => {
        return (
          <>
            {item.heading === "How It Works" && (
              <>
                <section className={classes.section}>
                  <h1>{item.heading}</h1>
                </section>{" "}
              </>
            )}
            {item.heading === "Choose a Category" && (
              <div className={classes.container}>
                <div className={classes.col1}>
                  <section className={classes.select_marker}>
                    <h1>{item.heading}</h1>
                    <div className={classes.description}>
                      {" "}
                      <p>{item.text}</p>{" "}
                    </div>
                  </section>{" "}
                </div>
                <div>
                  <img src={item?.images[0]?.image_url} alt="howitwork" />
                </div>
              </div>
            )}
            {item.heading === "View Category On Map" && (
              <div className={classes.container}>
                <div>
                  <img src={item?.images[0]?.image_url} alt="View Category On Map" />
                </div>
                <div className={classes.col2}>
                  <section className={classes.select_marker}>
                    <h1>{item.heading}</h1>
                    <div className={classes.description}>
                      {" "}
                      <p>{item.text}</p>{" "}
                    </div>
                  </section>{" "}
                </div>
              </div>
            )}
            {item.heading === "Select a Marker" && (
              <div className={classes.container}>
                <div className={classes.col1}>
                  <section className={classes.select_marker}>
                    <h1>{item.heading}</h1>
                    <div className={classes.description}>
                      {" "}
                      <p>{item.text}</p>{" "}
                    </div>
                  </section>{" "}
                </div>
                <div>
                  <img src={item?.images[0]?.image_url} alt="Select a Marker" />
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default HowitWorks;
