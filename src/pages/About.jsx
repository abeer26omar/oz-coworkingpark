import React, { useContext, useEffect } from "react";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import AboutOz from "../components/About/AboutOz/AboutOz";
import { DataContext } from "../apis/context/SiteDataContext";

const About = () => {

    const { ResetPageName, getComponentValue } = useContext(DataContext);
    useEffect(() => {
      ResetPageName('about_us');
    }, []);

  return (
    <>
      <AboutHeader configData={getComponentValue("about_us_page")} />
      <AboutOz configData={getComponentValue("about_us_page")} />
    </>
  );
};

export default React.memo(About);
