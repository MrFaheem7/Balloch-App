import React from "react";
import classes from "./Section.module.scss";
import Card from "../../../components/common/Card/Card";
import carParking from "../../../assets/png/Car Parking.png";
import { SERVER_URL } from "../../../utils/helpers";

const KeyFeatures = ({ cardContent, content }: any) => {

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        {content?.map((item: any, index: any) => {
          return (
            <>
              {item.heading === "Key Features" && (
                <>
                  <h1>{item.heading}</h1>
                  <div className={classes.description}>
                    {" "}
                    <p>{item.text}</p>{" "}
                  </div>
                </>
              )}
            </>
          );
        })}
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
      </div>
    </div>
  );
};

export default KeyFeatures;
