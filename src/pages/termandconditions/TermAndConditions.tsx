import React, { useEffect, useState } from "react";
import { HTTP_CLIENT } from "../../utils/config";
import { ENDPOINTS } from "../../utils/helpers";
import classes from "../privacyPolicy/privacypolicy.module.scss";
import parser from "html-react-parser";
import Loader from "../../components/common/loader/loader";

const TermAndConditions = () => {
  const [data, setData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    HTTP_CLIENT.get(ENDPOINTS.GETTERMANDCONDITIONS)
      .then((response) => {
        const res = response.data.result.text;

        setData(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.container}>{parser(data)}</div>
      )}
    </>
  );
};

export default TermAndConditions;
