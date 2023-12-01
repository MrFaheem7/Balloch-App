import React from "react";
import classes from "./Section.module.scss";

const KeyFeatures = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h1>Key Features</h1>
        <div className={classes.description}>
          {" "}
          <p>
            BallochParkGuide guarantees to vastly improve your overall
            experience, making your visit <br /> well-prepared and more
            enjoyable with the following key features.
          </p>{" "}
        </div>
      </section>{" "}
    </div>
  );
};

export default KeyFeatures;
