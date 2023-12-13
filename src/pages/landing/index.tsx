import { useState, useEffect } from "react";
import MainView from "./view/MainView";
import Section from "./section/Section";
import classes from "../style.module.scss";
import HowitWorks from "./section/HowitWorks";
import Button from "../../components/button/button";
import ContactUs from "./contact/ContactUs";
import { HTTP_CLIENT } from "../../utils/config";
import { ENDPOINTS } from "../../utils/helpers";
import { useLocation } from "react-router-dom";
import Loader from "../../components/common/loader/loader";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [cardContent, setCardContent] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);
  const [loadingCardContent, setLoadingCardContent] = useState(true);
  const location = useLocation();
  useEffect(() => {
    HTTP_CLIENT.get(ENDPOINTS.GETALL)
      .then((response) => {
        setData(response.data.result);
      })
      .finally(() => {
        setLoadingData(false);
      });
    HTTP_CLIENT.get(ENDPOINTS.GETCONTENTS)
      .then((response) => {
        setContent(response.data.result);
      })
      .finally(() => {
        setLoadingContent(false);
      });
    HTTP_CLIENT.get(ENDPOINTS.GETCONTENTSCARDS)
      .then((response) => {
        setCardContent(response.data.result);
      })
      .finally(() => {
        setLoadingCardContent(false);
      });
  }, []);
  const isLoading = loadingData || loadingContent || loadingCardContent;

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        var scrollToElement = document.getElementById("contact");
        scrollToElement?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 1000);
  }, []);
  const [visible, setVisible] = useState(false);

  const handletoggle = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setVisible(true);
    } else if (scroll <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handletoggle);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainView content={content} />
          <Section content={content} cardContent={cardContent} />
          <Button data={data} />
          <HowitWorks content={content} />
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
      )}
    </>
  );
};

export default MainPage;
