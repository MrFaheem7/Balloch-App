import React from "react";
import { BeatLoader } from "react-spinners";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.container}>
      <BeatLoader color=" rgb(153, 153, 167)" loading={true} />
    </div>
  );
};

export default Loader;
