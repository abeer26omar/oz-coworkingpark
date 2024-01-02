import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import "./BookinHeader.css";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import Gym from '../../assets/images/Gym.jpg'
import { Link } from "react-router-dom";
const HeadZeeStuido = (props) => {
  //   const [video, setVideo] = useState("");

  //   useEffect(() => {
  //     const bookingVideo = () => {
  //       props.configData.map((configItem) => {
  //         if (configItem.key === "booking_page_video") {
  //           setVideo(configItem.value);
  //         }
  //       });
  //     };
  //     bookingVideo();
  //   }, [props]);

  return (
    <>
    
      <MainHeaderWrapper image={Gym}>
        <div className={`container-fluid px-70`}>
          <div className="col-xl-6 col-lg-9 col-12">
            {/* {props.configData
              ? props.configData.map((configItem, index) => (
                  <React.Fragment key={index}>
                    {configItem.key === "booking_page_title" && (
                      <Paragraph className="head_paragraph mb-3">
                        {configItem.value}
                      </Paragraph>
                    )}
                    {configItem.key === "booking_page_description" && (
                      <Paragraph className="description mb-0">
                        {configItem.value}
                      </Paragraph>
                    )}
                  </React.Fragment>
                ))
              : ""} */}
            <Paragraph className="head_paragraph mb-3">Zee studio</Paragraph>
            <Paragraph className="description mb-0">
              Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
              amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem
              ipsum dolor sit
            </Paragraph>
            <Link class="btn_default btn btn_outline mt-4 " href="/about">
              Explore More
            </Link>
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default React.memo(HeadZeeStuido);
