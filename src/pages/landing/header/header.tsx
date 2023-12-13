import React from "react";
import headerLogo from "../../../assets/jpeg/headerlogo.jpeg";
import classes from "./header.module.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <img alt="logo" onClick={() => navigate("/")} src={headerLogo} />
      <button className={classes.btn}>Download Now</button>
    </div>
  );
};

export default Header;
