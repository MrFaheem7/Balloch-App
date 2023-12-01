import React from "react";
import classes from "./Card.module.scss";
const Card = () => {
  return (
    <section className={classes.card}>
      <h1>Choose a Category</h1>
      <div className={classes.description}>
        {" "}
        <p>
          Browse our treasure trove of categories <br /> in our specialised
          feature-rich menu.
        </p>{" "}
      </div>
    </section>
  );
};

export default Card;
