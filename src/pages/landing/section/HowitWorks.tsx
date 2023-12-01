import React from "react";
import classes from "./Howitworks.module.scss";
import workpng from "../../../assets/png/howitworks.png";
import mappng from "../../../assets/png/map.png";
import fairytail from "../../../assets/png/farytail.png";
const HowitWorks = () => {
  return (
    <div className={classes.maincontainer}>
      <section className={classes.section}>
        <h1>How It Works</h1>
      </section>{" "}
      <div className={classes.container}>
        <div className={classes.col1}>
          <section className={classes.card}>
            <h1>Choose a Category</h1>
            <div className={classes.description}>
              {" "}
              <p>
                Browse our treasure trove of categories <br /> in our
                specialised feature-rich menu.
              </p>{" "}
            </div>
          </section>{" "}
        </div>
        <div>
          <img src={workpng} alt="howitwork" />
        </div>
      </div>
      <div className={classes.container}>
        <div>
          <img src={mappng} alt="howitwork" />
        </div>
        <div className={classes.col1}>
          <section className={classes.card}>
            <h1>View Category on Map</h1>
            <div className={classes.description}>
              {" "}
              <p>
                View the category marker's on our user- <br />
                friendly interactive map.
              </p>{" "}
            </div>
          </section>{" "}
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.col1}>
          <section className={classes.card}>
            <h1>Select a Marker</h1>
            <div className={classes.description}>
              {" "}
              <p>
                Select a marker to reveal all of it's <br />
                information including, photo's, detailed <br /> description &
                reviews. You also have the <br />
                option to save, add notes and leave a <br /> review yourself.
              </p>{" "}
            </div>
          </section>{" "}
        </div>
        <div className={classes.col1}>
          <img src={fairytail} alt="fairytail" />
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
