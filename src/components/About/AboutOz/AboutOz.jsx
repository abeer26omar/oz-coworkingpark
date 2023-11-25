import React from "react";
import "./AboutOz.css";
import vector from "../../../assets/images/VectorRight.png";
import about1 from "../../../assets/images/about/about5.png";
import about2 from "../../../assets/images/about/about3.png";
import about3 from "../../../assets/images/about/about4.png";
import about4 from "../../../assets/images/about/teams-1.png";
import about5 from "../../../assets/images/about/teams-2.png";
import about6 from "../../../assets/images/about/site-about.png";
import about7 from "../../../assets/images/about/about6.png";
import about8 from "../../../assets/images/about/food (3).png";
import about9 from "../../../assets/images/about/food (2).png";
import about10 from "../../../assets/images/about/food (4).png";
import about11 from "../../../assets/images/about/food (5).png";
import about12 from "../../../assets/images/about/food (1).png";
import about13 from "../../../assets/images/about/c-meeet.png";
import AboutozFooter from "./AboutozFooter";
import Media from "../../Media/Media";
import { useEffect, useState } from "react";
import axios from "axios";
import Paragraph from "../../UI/Paragraph";

const AboutOz = (props) => {
  console.log(props.configData);
  const [amenities, setamenities] = useState([]);
  useEffect(() => {
    const getAmenities = async () => {
      try {
        const config = {
          method: "get",
          url: `${process.env.REACT_APP_API_CONFIG_URL}/api/about_us_amenities`,
        };
        const response = await axios(config);
        setamenities(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAmenities();
  }, []);
  return (
    <>
      <section className="about-oz body-dark">
        <div className="position-relative mb-5">
          <div className="img_float">
            <Media className="opacity-50" type="img" src={vector} alt="shape" />
          </div>
          <div
            className="head-content-left-shape text-left  position-absolute"
            style={{ top: "40px", left: "100px" }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-block">
                <svg
                  width="72"
                  height="40"
                  viewBox="0 0 72 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3413 9.16777C13.8992 9.16777 10.3477 13.4478 10.3477 20C10.3477 26.5522 13.8992 30.8322 19.3413 30.8322C24.7834 30.8322 28.3349 26.5522 28.3349 20C28.3093 13.4478 24.7579 9.16777 19.3413 9.16777ZM33.0361 34.4254C29.3058 38.1506 24.7068 40 19.3157 40C13.9247 40 9.32572 38.177 5.59543 34.4254C1.89069 30.7001 0 25.9181 0 20C0 14.0819 1.89069 9.29987 5.62098 5.57464C9.35127 1.82299 13.9503 0 19.3413 0C24.7323 0 29.3313 1.82299 33.0616 5.57464C36.7919 9.29987 38.6826 14.0819 38.6826 20C38.657 25.9181 36.7663 30.7001 33.0361 34.4254Z"
                    fill="white"
                  />
                  <path
                    d="M71.9995 30.7011V39.2348H40.4453V31.3616L58.7646 9.30083H40.6242V0.740723H71.5396V8.79885L53.0925 30.7011H71.9995Z"
                    fill="white"
                  />
                </svg>

                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key ===
                          "about_us_page_header_sub_description" && (
                          <Paragraph className="head_paragraph text-uppercase font-2">
                            “{configItem.value}”
                          </Paragraph>
                        )}
                      </React.Fragment>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section body-dark">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 col-lg-5 col-sm-6 col-xs-6 box-content-black px-0">
              {props.configData
                ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "about_us_page_our_vision_image" && (
                        <img
                          className="image-box w-100 ps-0"
                          src={configItem.value}
                          alt={configItem.key}
                        />
                      )}
                    </React.Fragment>
                  ))
                : ""}
            </div>

            <div className="col-md-6 col-lg-7 col-sm-6 col-xs-6 box-content-black m-auto ms-auto ps-0">
              <div className="box-content ">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key === "about_us_page_new_idea_title" && (
                          <Paragraph className="small_title_white">
                            {configItem.value}
                          </Paragraph>
                        )}
                        {configItem.key ===
                          "about_us_page_new_idea_description" && (
                          <Paragraph className="text_desc_black">
                            {configItem.value}
                          </Paragraph>
                        )}
                      </React.Fragment>
                    ))
                  : ""}
              </div>
            </div>

            <div className="col-md-6 col-lg-7 col-sm-6 col-xs-6 box-content-black m-auto ">
              <div className="box-content">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key ===
                          "about_us_page_our_vision_title" && (
                          <Paragraph className="text_desc_black">
                            {configItem.value}
                          </Paragraph>
                        )}
                        {configItem.key ===
                          "about_us_page_our_vision_description" && (
                          <Paragraph className="p-text-box">
                            {configItem.value}
                          </Paragraph>
                        )}
                      </React.Fragment>
                    ))
                  : ""}
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-6 col-xs-6 box-content-black">
              {props.configData
                ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "about_us_page_our_vision_image" && (
                        <img
                          className="image-box w-100 ps-0"
                          src={configItem.value}
                          alt={configItem.key}
                        />
                      )}
                    </React.Fragment>
                  ))
                : ""}
            </div>

            <div className="row py-5">
              <div className="col-lg-6 ">
                <div className="mission">
                  <Paragraph className="text_desc_black w-75 mx-auto">
                    Our Mission
                  </Paragraph>
                  {props.configData
                    ? props.configData.map((configItem, index) => (
                        <React.Fragment key={index}>
                          {configItem.key ===
                            "'about_us_page_our_mission_title" && (
                            <Paragraph className="text_desc_black ">
                              {configItem.value}
                            </Paragraph>
                          )}
                          {configItem.key ===
                            "about_us_page_our_mission_description" && (
                            <Paragraph className="p-text-box w-75 m-auto pb-2">
                              {configItem.value}
                            </Paragraph>
                          )}
                          {configItem.key ===
                            "about_us_page_our_mission_image_3" && (
                            <img src={configItem.value} alt={"img"} />
                          )}
                        </React.Fragment>
                      ))
                    : ""}
                </div>
              </div>
              <div className="col-6 position-relative flex-end p-60 ">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key ===
                          "about_us_page_our_mission_image_1" && (
                          <img
                            className="img-small-right"
                            src={configItem.value}
                            alt={"img"}
                          />
                        )}
                        {configItem.key ===
                          "about_us_page_our_mission_image_2" && (
                          <Media
                            type="img"
                            src={configItem.value}
                            alt={"img"}
                          />
                        )}
                      </React.Fragment>
                    ))
                  : ""}
              </div>
            </div>
            {/* //// */}
            <div className="row p-5">
              <div className="col-lg-7 ">
                <div className="row">
                  <div className="col-lg-6">
                    {props.configData
                      ? props.configData.map((configItem, index) => (
                          <React.Fragment key={index}>
                            {configItem.key ===
                              "about_us_page_community_image_1" && (
                              <img src={configItem.value} alt={"img"} />
                            )}
                          </React.Fragment>
                        ))
                      : ""}
                  </div>
                  <div className="col-lg-6">
                    {props.configData
                      ? props.configData.map((configItem, index) => (
                          <React.Fragment key={index}>
                            <div className="px-40">
                              {configItem.key ===
                                "about_us_page_community_title" && (
                                <Paragraph className="text_desc_black mt-0">
                                  {configItem.value}
                                </Paragraph>
                              )}
                              {configItem.key ===
                                "about_us_page_community_description" && (
                                <Paragraph className="p-text-box">
                                  {configItem.value}
                                </Paragraph>
                              )}
                            </div>
                          </React.Fragment>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 flex-end ">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key ===
                          "about_us_page_community_image_2" && (
                          <img src={configItem.value} alt={"img"} />
                        )}
                      </React.Fragment>
                    ))
                  : ""}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-4 col-xs-6 box-content-black   ">
              <div className="box-content     ">
                <div className="d-block justify-content-center ">
                  <div className="">
                    {props.configData
                      ? props.configData.map((configItem, index) => (
                          <React.Fragment key={index}>
                            {configItem.key === "about_us_page_event_title" && (
                              <Paragraph className="text_desc_black">
                                {configItem.value}
                              </Paragraph>
                            )}
                            {configItem.key ===
                              "about_us_page_event_description" && (
                              <Paragraph className="p-text-box">
                                {configItem.value}
                              </Paragraph>
                            )}
                          </React.Fragment>
                        ))
                      : ""}
                  </div>
                  {props.configData
                    ? props.configData.map((configItem, index) => (
                        <React.Fragment key={index}>
                          {configItem.key === "about_us_page_event_image_1" && (
                            <img
                              className="img-events"
                              src={configItem.value}
                              alt={configItem.key}
                            />
                          )}
                        </React.Fragment>
                      ))
                    : ""}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 m-auto box-content-black  ">
              {props.configData
                ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "about_us_page_event_image_2" && (
                        <Media
                          type="img"
                          className="image-box w-100"
                          src={configItem.value}
                          alt={configItem.key}
                          style={{
                            width: "762px",
                            height: "546px",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))
                : ""}
            </div>
          </div>
          <div className="position-relative py-5">
            {props.configData
              ? props.configData.map((configItem, index) => (
                  <React.Fragment key={index}>
                    {configItem.key ===
                      "about_us_page_food_and_drink_image_3" && (
                      <img
                        className="food-1"
                        src={configItem.value}
                        alt={"img"}
                      />
                    )}
                    {configItem.key ===
                      "about_us_page_food_and_drink_image_2" && (
                      <img
                        className="food-2"
                        src={configItem.value}
                        alt={"img"}
                      />
                    )}
                    {configItem.key ===
                      "about_us_page_food_and_drink_image_1" && (
                      <img
                        className="food-3"
                        src={configItem.value}
                        alt={"img"}
                      />
                    )}{" "}
                    {configItem.key ===
                      "about_us_page_food_and_drink_image_4" && (
                      <img
                        className="food-4"
                        src={configItem.value}
                        alt={"img"}
                      />
                    )}{" "}
                    {configItem.key ===
                      "about_us_page_food_and_drink_image_5" && (
                      <img
                        className="food-5"
                        src={configItem.value}
                        alt={"img"}
                      />
                    )}
                  </React.Fragment>
                ))
              : ""}
            <div className="food">
              <Paragraph className="text_desc_black mt-0">
                Food & Drink{" "}
              </Paragraph>
              <Paragraph className="p-text-box  w-25 text-center">
                Personalized Hospitality That Knows You by Name
              </Paragraph>
            </div>
          </div>
          {/* /////////////////////////////// */}
          <div className="row py-5">
            <div className="col-xl-5">
              {props.configData
                ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "about_us_page_community_image_1" && (
                        <img src={configItem.value} alt={"img"} />
                      )}
                    </React.Fragment>
                  ))
                : ""}
            </div>
            <div className="col-md-6 col-lg-7 col-sm-6 col-xs-6 box-content-black m-auto ">
              {props.configData
                ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "about_us_page_oz_dna_title" && (
                        <Paragraph className="text_desc_black mt-0">
                          {configItem.value}
                        </Paragraph>
                      )}
                      {configItem.key ===
                        "about_us_page_oz_dna_description" && (
                        <Paragraph className="p-text-box">
                          {configItem.value}
                        </Paragraph>
                      )}
                    </React.Fragment>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </section>

      <section className="what-get p-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-amenities">
                <h2 className="text-h2 pb-5">Our Amenities</h2>
              </div>
            </div>

            {amenities.map((service, index) => {
              const { title, image, description } = service;
              return (
                <div
                  className="col-lg-6 col-md-6 col-sm-12 py-5 border-all"
                  key={index}
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Media type="img" src={image} alt={title} />
                        <h2 className="bold_desc mb-0">{title}</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <Paragraph className="mb-0 text-content text-secondary">
                        {description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <AboutozFooter />
    </>
  );
};

export default AboutOz;
