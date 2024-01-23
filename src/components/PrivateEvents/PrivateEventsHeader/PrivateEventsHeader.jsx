import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import prevent from "../../../assets/images/videos/prevent.mp4";
import "./PrivateEventsHeader.css";
import MainHeaderWrapper from "../../UI/MainHeaderWrapper";
import { PrivateEventsData } from "../../../Data/PrivateEventsData";
import Paragraph from "../../UI/Paragraph";
import Slider from "react-slick";
const PrivateEventsHeader = () => {
  const settings = {
    slidesToShow: PrivateEventsData.lenght || 4,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-body-tertiary navigator private slider-sm-responsive">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between  row">
            <div className="d-flex col-xl-6 col-md-4 col-sm-12">
              <h1 className="title-name mb-0">Private Events</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="127"
                viewBox="0 0 2 127"
                fill="none"
              >
                <path
                  d="M1 0L1.00001 127"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            {/* <div className=" py-3 "> */}
            {/*  */}
            <div className="col-xl-6 col-md-8 col-sm-12">
              <Slider {...settings} >
                {PrivateEventsData.map((addevent, index) => {
                  const { address } = addevent;
                  return (
                    <Link
                      className="nav-link-two links-margin "
                      to={address}
                      smooth={true}
                      duration={100}
                      key={index}
                    >
                      {address}
                    </Link>
                  );
                })}
              </Slider>
            </div>
            {/* </div> */}
          </div>
        </Container>
      </div>

      <MainHeaderWrapper video={prevent}>
        <div className={`container-fluid px-70 py-5`}>
          <div className="col-md-6 col-12">
            {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}> */}
            {/* {configItem.key === 'booking_page_title' && ( */}
            <Paragraph className="head_paragraph mb-3">
              {"Private Events"}
            </Paragraph>
            {/* )} */}
            {/* {configItem.key === 'booking_page_description' && ( */}
            <Paragraph className="description mb-0">
              {` Welcome to the vibrant world of OZ, where creativity thrives, and connections are made. Nestled in the heart of the city, OZ offers a range of versatile venues for rent, perfect for hosting a wide variety of events. Whether you're planning a corporate conference, a product launch, a networking event, or a social gathering, our venues are designed to meet your every need. With state-of-the-art facilities, flexible spaces, and a dynamic atmosphere, our coworking park provides the ideal backdrop for a successful and memorable event,`}
            </Paragraph>
            {/* )} */}
            {/* </React.Fragment>
                        )): ''} */}
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default PrivateEventsHeader;
