import { useState, useEffect } from "react";
import Header from "./header/header";
import MainView from "./view/MainView";
import Section from "./section/Section";
import Footer from "./footer/Footer";
import classes from "../style.module.scss";
import arrow from "../../assets/png/arrow.svg";
import HowitWorks from "./section/HowitWorks";
import Card from "../../components/common/Card/Card";
import Button from "../../components/button/button";
import ContactUs from "./contact/ContactUs";
import { HTTP_CLIENT } from "../../utils/config";
import { ENDPOINTS } from "../../utils/helpers";

const MainPage = () => {
  const [data, setData] = useState([])
  const [content, setContent] = useState([])
  const [cardContent, setCardContent] = useState([])
  useEffect(() => {
    HTTP_CLIENT.get(ENDPOINTS.GETALL).then((response) => {

      setData(response.data.result)
    })
    HTTP_CLIENT.get(ENDPOINTS.GETCONTENTS).then((response) => {

      setContent(response.data.result)

    })
    HTTP_CLIENT.get(ENDPOINTS.GETCONTENTSCARDS).then((response) => {

      setCardContent(response.data.result)
    })
  }, [])
  const [visible, setVisible] = useState(false);

  const handletoggle = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setVisible(true)
    }
    else if (scroll <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  window.addEventListener("scroll", handletoggle)
  return (
    <>
      <MainView content={content} />
      <Section cardContent={cardContent} />
      <Button data={data} />
      <HowitWorks />
      <div id="contact">
        <ContactUs />
      </div>
      <button
        onClick={scrollToTop}
        type="button"
        className={visible ? classes.btn : classes.inVisible}
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default MainPage;
