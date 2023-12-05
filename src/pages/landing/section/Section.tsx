import React from "react";
import classes from "./Section.module.scss";
import Card from "../../../components/common/Card/Card";
import carParking from "../../../assets/png/Car Parking.png";
import { SERVER_URL } from "../../../utils/helpers";

const KeyFeatures = ({ cardContent }: any) => {
  // const data = [
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map Discover what the park has to offer with it's many things to see and do with it's interactive map",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map Discover what the park has to offer with it's many things to see and do with it's interactive map",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map Discover what the park has to offer with it's many things to see and do with it's interactive map",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map Discover what the park has to offer with it's many things to see and do with it's interactive map",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  //   {
  //     src: carParking,
  //     title: "Interactive Map",
  //     description:
  //       "Discover what the park has to offer with it's many things to see and do with it's interactive map.",
  //   },
  // ];
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
        <div className={classes.cards}>
          {cardContent?.map((item: any) => {
            return (
              <Card
                title={item?.title}
                description={item?.description}
                src={SERVER_URL + item?.image}
              />
            );
          })}
        </div>
      </section>{" "}
    </div>
  );
};

export default KeyFeatures;
