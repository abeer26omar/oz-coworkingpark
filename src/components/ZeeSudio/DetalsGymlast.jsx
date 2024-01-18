import React, { useContext, useState } from "react";
import Media from "../Media/Media";
import details from "../../assets/images/DetalPage.jpg";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import LoginAlert from "../Auth/LoginAlertModal";

function DetalsGymlast({ details }) {

  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  const handelClose = () => setShowLogin(false);

  const navigate = useNavigate();

  const HandelSummery = (value) => {
    const gymCourseDetails = {
      id: value.id,
      title: value.title,
      date: value.start_date,
      duration: value.duration,
      schedule: value.schedule,
      price: value.price,
      level: value.level,
    };
  
    if (token) {
      sessionStorage.setItem(
        "OZgymCourseDetails",
        JSON.stringify(gymCourseDetails)
      );
      navigate(`/payment`);
    } else {
      setShowLogin(true);
    }
  };
  return (
    <>
      <div className="container-fluid px-70 py-5">
        {details && (
          <div className="row g-0">
            <div className="col-xl-8 col-md-6 col-sm-12">
              <Media
                type="img"
                src={details.image}
                alt={details.title}
                className="w-100"
              />
              <div className="py-4">
                <Paragraph className="desc_small light">
                  {moment(details.end_date, "YYYY-MM-DD").format("MMMM DD, YYYY")}
                </Paragraph>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="bg-gymDetails py-4 px-4 ">
                <Paragraph className="card-title">Class Details</Paragraph>
                <Paragraph className="desc_small_light py-3">
                  {details.details}
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Duration :
                  <span className="desc_small"> {details.duration}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Intensity :
                  <span className="desc_small"> {details.intensity}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Fitness Level :
                  <span className="desc_small"> {details.level}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Schedule :
                  <span className="desc_small">{details.schedule}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Start & End Time :
                  <span className="desc_small">
                    <span className="px-2">
                      {moment(details.start_time, 'HH:mm:ss').format("hh:mm a")}
                    </span>
                    -<span className="px-2">{moment(details.end_time, 'HH:mm:ss').format("hh:mm a")}</span>
                  </span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Price :
                  <span className="desc_small">
                    {Math.floor(details.price)} Egp
                  </span>
                </Paragraph>
                <Button
                  tagType="link"
                  onClick={() => HandelSummery(details)}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Book a Class"}
                </Button>
              </div>
            </div>
            <div className="col-10 mt-5 mt-xl-0">
              <Paragraph className="paragraph_black">
                The Healthy Life Style For All
              </Paragraph>
              <Paragraph className="description_black light">
                {details.descriptions}
              </Paragraph>              
            </div>
            <div className="col-12 py-5 video-container position-relative">
              <video
                src={details.video}
                className="w-100"
                height="616px"
                controls
              />
            </div>
          </div>
        )}
      </div>
      <LoginAlert show={showLogin} onHide={handelClose} />
    </>
  );
}

export default DetalsGymlast;
